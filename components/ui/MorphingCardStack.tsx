import React, { useState } from "react"
import { motion, AnimatePresence, LayoutGroup, type PanInfo } from "framer-motion"
import { cn } from "../../lib/utils"
import { Grid3X3, Layers, LayoutList } from "lucide-react"

export type LayoutMode = "stack" | "grid" | "list"

export interface CardData {
  id: string
  title: string
  description: string
  icon?: React.ReactNode
  color?: string
  date?: string
  author?: string
}

export interface MorphingCardStackProps {
  cards?: CardData[]
  className?: string
  defaultLayout?: LayoutMode
  onCardClick?: (card: CardData) => void
}

const layoutIcons = {
  stack: Layers,
  grid: Grid3X3,
  list: LayoutList,
}

const SWIPE_THRESHOLD = 50

export function MorphingCardStack({
  cards = [],
  className,
  defaultLayout = "stack",
  onCardClick,
}: MorphingCardStackProps) {
  const [layout, setLayout] = useState<LayoutMode>(defaultLayout)
  const [expandedCard, setExpandedCard] = useState<string | null>(null)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isDragging, setIsDragging] = useState(false)

  if (!cards || cards.length === 0) {
    return null
  }

  const handleDragEnd = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const { offset, velocity } = info
    const swipe = Math.abs(offset.x) * velocity.x

    if (offset.x < -SWIPE_THRESHOLD || swipe < -1000) {
      // Swiped left - go to next card
      setActiveIndex((prev) => (prev + 1) % cards.length)
    } else if (offset.x > SWIPE_THRESHOLD || swipe > 1000) {
      // Swiped right - go to previous card
      setActiveIndex((prev) => (prev - 1 + cards.length) % cards.length)
    }
    setIsDragging(false)
  }

  const getStackOrder = () => {
    const reordered = []
    for (let i = 0; i < cards.length; i++) {
      const index = (activeIndex + i) % cards.length
      reordered.push({ ...cards[index], stackPosition: i })
    }
    return reordered.reverse() // Reverse so top card renders last (on top)
  }

  const getLayoutStyles = (stackPosition: number) => {
    switch (layout) {
      case "stack":
        return {
          top: stackPosition * 8,
          left: stackPosition * 8,
          zIndex: cards.length - stackPosition,
          rotate: (stackPosition - 1) * 2,
        }
      case "grid":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
      case "list":
        return {
          top: 0,
          left: 0,
          zIndex: 1,
          rotate: 0,
        }
    }
  }

  const containerStyles = {
    stack: "relative h-80 w-full max-w-sm", // Increased height for content
    grid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
    list: "flex flex-col gap-4",
  }

  const displayCards = layout === "stack" ? getStackOrder() : cards.map((c, i) => ({ ...c, stackPosition: i }))

  return (
    <div className={cn("space-y-8", className)}>
      {/* Layout Toggle */}
      <div className="flex items-center justify-center gap-1 rounded-lg bg-white/5 border border-white/10 p-1 w-fit mx-auto backdrop-blur-sm">
        {(Object.keys(layoutIcons) as LayoutMode[]).map((mode) => {
          const Icon = layoutIcons[mode]
          return (
            <button
              key={mode}
              onClick={() => {
                  setLayout(mode);
                  setExpandedCard(null); // Reset expansion on layout change
              }}
              className={cn(
                "rounded-md p-2 transition-all duration-300",
                layout === mode
                  ? "bg-brand-accent text-black shadow-lg shadow-brand-accent/20"
                  : "text-gray-400 hover:text-white hover:bg-white/10",
              )}
              aria-label={`Switch to ${mode} layout`}
            >
              <Icon className="h-4 w-4" />
            </button>
          )
        })}
      </div>

      {/* Cards Container */}
      <LayoutGroup>
        <motion.div layout className={cn(containerStyles[layout], "mx-auto")}>
          <AnimatePresence mode="popLayout">
            {displayCards.map((card) => {
              const styles = getLayoutStyles(card.stackPosition)
              const isExpanded = expandedCard === card.id
              const isTopCard = layout === "stack" && card.stackPosition === 0

              return (
                <motion.div
                  key={card.id}
                  layoutId={card.id}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: isExpanded ? 1.02 : 1,
                    x: 0,
                    ...styles,
                  }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                  }}
                  drag={isTopCard ? "x" : false}
                  dragConstraints={{ left: 0, right: 0 }}
                  dragElastic={0.7}
                  onDragStart={() => setIsDragging(true)}
                  onDragEnd={handleDragEnd}
                  whileDrag={{ scale: 1.02, cursor: "grabbing" }}
                  onClick={() => {
                    if (isDragging) return
                    setExpandedCard(isExpanded ? null : card.id)
                    onCardClick?.(card)
                  }}
                  className={cn(
                    "cursor-pointer rounded-2xl border border-white/10 bg-[#121212] p-6 shadow-xl backdrop-blur-xl",
                    "hover:border-brand-accent/50 transition-colors duration-300",
                    layout === "stack" && "absolute w-full h-full shadow-[0_20px_50px_rgba(0,0,0,0.5)]",
                    layout === "stack" && isTopCard && "cursor-grab active:cursor-grabbing",
                    layout === "grid" && "w-full min-h-[200px]",
                    layout === "list" && "w-full",
                    isExpanded && "ring-1 ring-brand-accent bg-[#1a1a1a] z-50",
                  )}
                  style={{
                    // Gradient overlay hint
                    backgroundImage: 'linear-gradient(to bottom right, rgba(255,255,255,0.03), rgba(0,0,0,0))'
                  }}
                >
                  <div className="flex items-start gap-4 h-full flex-col">
                    <div className="flex items-center justify-between w-full">
                        {card.icon && (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/5 text-brand-accent border border-white/5">
                            {card.icon}
                        </div>
                        )}
                        {(card.date || card.author) && (
                            <div className="text-xs text-gray-500 font-mono">
                                {card.date} • {card.author}
                            </div>
                        )}
                    </div>
                    
                    <div className="min-w-0 flex-1 flex flex-col mt-2">
                      <h3 className="font-display font-bold text-xl text-white mb-2 leading-tight">{card.title}</h3>
                      <p
                        className={cn(
                          "text-sm text-gray-400 leading-relaxed",
                          layout === "stack" && !isExpanded && "line-clamp-4",
                          layout === "grid" && !isExpanded && "line-clamp-3",
                          layout === "list" && !isExpanded && "line-clamp-2",
                        )}
                      >
                        {card.description}
                      </p>
                    </div>
                  </div>

                  {isTopCard && layout === "stack" && (
                    <div className="absolute bottom-4 left-0 right-0 text-center pointer-events-none">
                      <span className="text-[10px] text-gray-600 uppercase tracking-widest">Swipe to explore</span>
                    </div>
                  )}
                </motion.div>
              )
            })}
          </AnimatePresence>
        </motion.div>
      </LayoutGroup>

      {layout === "stack" && cards.length > 1 && (
        <div className="flex justify-center gap-2 mt-4">
          {cards.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                index === activeIndex ? "w-6 bg-brand-accent" : "w-1.5 bg-gray-700 hover:bg-gray-600",
              )}
              aria-label={`Go to card ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

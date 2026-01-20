import React from 'react';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className = "h-16 w-auto" }) => {
  return (
    <img 
      src="https://gophygital.io/images/logo.png" 
      srcSet="https://gophygital.io/images/logo2x.png 2x"
      alt="GoPhygital" 
      className={className}
    />
  );
};

export default Logo;
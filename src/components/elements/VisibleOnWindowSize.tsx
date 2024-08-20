import { useState, useEffect } from "react";

const VisibleOnWindowSize: React.FC<{
  children: React.ReactNode,
  minWidth?: number,
  minHeight?: number,
}> = ({ children, minWidth = 0, minHeight = 0}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      const currentWidth = window.visualViewport?.width || window.innerWidth;
      const currentHeight = window.visualViewport?.height || window.innerHeight;

      // Define your zoom level threshold here
      if (currentWidth < minWidth || currentHeight < minHeight) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isVisible ? <>{children}</> : null;
};

export default VisibleOnWindowSize;
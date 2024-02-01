//* Reference: https://stackoverflow.com/questions/44480053/how-to-detect-if-screen-size-has-changed-to-mobile-in-react

import { useEffect, useState } from 'react';

// TODO: On initial load if screen size is <= 768, the hamburger menu doesn't show up
const useResizer = () => {
  const [isResized, setIsResized] = useState(false);

  const handleResize = () => {
    if (window.innerWidth <= 768) {
      setIsResized(true);
    } else {
      setIsResized(false);
    }
  };

  useEffect(() => {
    // This ensures on initial load if screen width
    // is <= 768 hamburger menu appears as expected.
    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      // Cleanup event listener on component unmount
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Empty dependency array instructs the effect to run once on mount

  return isResized;
};

export default useResizer;

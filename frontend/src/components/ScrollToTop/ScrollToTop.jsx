import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { event } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [event]);

  return null;
};

export default ScrollToTop;

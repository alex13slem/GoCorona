import {useEffect, useState} from 'react';

export const useScrollElemOpacity = (
  elemHeight: number,
  {maxOpacity = 100}
) => {
  const [currentScrollPos, setCurrentScrollPos] = useState(0);
  const [elemOpacity, setElemOpacity] = useState(0);
  const CRITICAL_OFFSET = 15;

  const handleScroll = () => {
    setCurrentScrollPos(window.scrollY);

    if (currentScrollPos <= CRITICAL_OFFSET) {
      setElemOpacity(0);
      return;
    }
    if (currentScrollPos <= elemHeight) {
      setElemOpacity(currentScrollPos);
      return;
    }
    if (currentScrollPos > elemHeight) {
      setElemOpacity(maxOpacity);
      return;
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  });

  return elemOpacity;
};

import {useLayoutEffect, useState} from 'react';

export const useDOMRectHeight = (elem: HTMLDivElement | null) => {
  const [DOMRectHeight, setDOMRectHeight] = useState<number>(0);

  useLayoutEffect(() => {
    if (!elem) return;

    const DOMRect = elem.getBoundingClientRect().height;
    setDOMRectHeight(DOMRect);
  }, [elem]);

  return DOMRectHeight;
};

import {useLayoutEffect} from 'react';

interface useSelectorStyleProps {
  selector: string;
  cssText: string;
}

export const useSelectorStyle = ({
  selector,
  cssText,
}: useSelectorStyleProps) => {
  const element: HTMLElement | null = document.querySelector(selector);
  if (!element) return;

  useLayoutEffect(() => {
    element.style.cssText = cssText;

    return () => {
      element.style.cssText = '';
    };
  }, []);
};

import {useLayoutEffect, useState} from 'react';

interface useDocumentFaviconProps {
  ico?: string;
  svg?: string;
}

export const useDocumentFavicon = (init: useDocumentFaviconProps) => {
  const SVG = {
    REL: 'icon',
    TYPE: 'image/svg+xml',
  };
  const ICO = {
    REL: 'shortcut icon',
    TYPE: 'image/x-icon',
  };

  const [documentFavicon, setDocumentFavicon] = useState(init);

  let linkIco: HTMLLinkElement | null = document.querySelector(
    `link[type='${ICO.TYPE}']`
  );
  let linkSvg: HTMLLinkElement | null = document.querySelector(
    `link[type='${SVG.TYPE}']`
  );

  const hrefWODomain = (link: HTMLLinkElement) =>
    link.href.replace(`http://${window.location.host}/`, '');

  const addedIco = () => {
    if (documentFavicon.ico) {
      if (!linkIco) {
        linkIco = document.createElement('link');
        linkIco.rel = ICO.REL;
        linkIco.type = ICO.TYPE;
        document.head.appendChild(linkIco);
      }
      if (hrefWODomain(linkIco) != documentFavicon.ico) {
        linkIco.href = documentFavicon.ico;
      }
    }
  };

  const addedSvg = () => {
    if (documentFavicon.svg) {
      if (!linkSvg) {
        linkSvg = document.createElement('link');
        linkSvg.rel = SVG.REL;
        linkSvg.type = SVG.TYPE;
        document.head.appendChild(linkSvg);
      }
      if (hrefWODomain(linkSvg) != documentFavicon.svg) {
        linkSvg.href = documentFavicon.svg;
      }
    }
  };

  const removeIco = () => {
    !documentFavicon.ico && linkIco?.parentNode?.removeChild(linkIco);
  };

  const removeSvg = () => {
    !documentFavicon.svg && linkSvg?.parentNode?.removeChild(linkSvg);
  };

  useLayoutEffect(() => {
    removeIco();
    removeSvg();
    addedIco();
    addedSvg();
  }, [documentFavicon.ico, documentFavicon.svg, linkIco, linkSvg]);

  return [documentFavicon, setDocumentFavicon];
};

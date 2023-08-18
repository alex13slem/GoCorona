import {useRef, useState, FC, HTMLAttributes} from 'react';

import {SVGSiteLogo} from '@/assets/SVG/SVGSiteLogo';

import SiteNavigate from './SiteNavigate';

import {BurgerBtnUI, ButtonUI, HeaderUI, SiteLogoUI} from '@/UI';
import {
  useScrollElemHide,
  useScrollElemOpacity,
  useDOMRectHeight,
} from '@/hooks';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

const Header: FC<HeaderProps> = ({...props}) => {
  const rootRef = useRef<HTMLDivElement>(null);
  const rootHeight = useDOMRectHeight(rootRef.current);
  const [visibleMenu, setVisibleMenu] = useState(false);

  const [headerTopValue] = useScrollElemHide(rootHeight, {
    isFixed: visibleMenu,
  });

  const headerOpacity = useScrollElemOpacity(rootHeight, {maxOpacity: 90});

  return (
    <HeaderUI
      {...props}
      ref={rootRef}
      style={{
        background: `rgb(255 255 255 / ${headerOpacity}%)`,
        top: headerTopValue + 'px',
      }}
    >
      <SiteLogoUI to={'/'}>
        <SVGSiteLogo />
      </SiteLogoUI>
      <SiteNavigate isVisible={visibleMenu} />
      <ButtonUI $color="blue">DOWNLOAD</ButtonUI>
      <BurgerBtnUI isVisible={visibleMenu} handleClick={setVisibleMenu} />
    </HeaderUI>
  );
};

export default Header;

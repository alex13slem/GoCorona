import {FC, HTMLAttributes} from 'react';
import {FooterUI} from '@/UI';
import {SVGAppleLogo, SVGGoogleLogo} from '@/assets/SVG/FirmLogos';

interface Props extends HTMLAttributes<HTMLDivElement> {}

const Footer: FC<Props> = ({...props}) => {
  return (
    <FooterUI {...props}>
      <a href="">
        <SVGAppleLogo />
      </a>
      <a href="">
        <SVGGoogleLogo />
      </a>
    </FooterUI>
  );
};

export default Footer;

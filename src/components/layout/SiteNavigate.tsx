import {NavLinkUI, SiteNavigateUI} from '@/UI';

import links from '@/data/navLinks.json';

const SiteNavigate = ({isVisible = false}) => {
  return (
    <SiteNavigateUI className={isVisible ? 'visible' : ''}>
      {links.map((link) => (
        <NavLinkUI key={link.id} to={link.to}>
          {link.text}
        </NavLinkUI>
      ))}
    </SiteNavigateUI>
  );
};

export default SiteNavigate;

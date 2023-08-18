import {cN} from './format';

export const setNavLinkStyle =
  (classBasic, classActive) =>
  ({isActive}) =>
    isActive ? cN(classBasic, classActive) : classBasic;

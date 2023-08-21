import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import navigationLinksData from '../../data/navigationLinksData';

const MobileNavigation = ({ closeMobileMenu }) => (
  <nav>
    <ul>
      {navigationLinksData.map((link) => (
        <li key={link.name}>
          <Link to={link.path} onClick={closeMobileMenu}>
            <img src={link.icon} alt={link.alt} />
            <span>{link.name}</span>
            {link.rightIcon && <img src={link.rightIcon} alt={link.alt} />}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

MobileNavigation.displayName = 'MobileNavigation';

MobileNavigation.defaultProps = {
  closeMobileMenu: () => false,
};

MobileNavigation.propTypes = {
  closeMobileMenu: Proptypes.func,
};

export default MobileNavigation;

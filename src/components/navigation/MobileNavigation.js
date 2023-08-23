import { Link } from 'react-router-dom';
import Proptypes from 'prop-types';
import navigationLinksData from '../../data/navigationLinksData';
import styles from './navigation.module.css';

const Navigation = ({ closeMobileMenu }) => (
  <nav className={` flex flex-column background-blue ${styles.navigationContainer}`}>
    <hr className={`white ${styles.line}`} />
    <ul className={`flex flex-column ${styles.linksContainer}`}>
      {navigationLinksData.map((link, index) => (
        <li key={link.name}>
          <Link to={link.path} onClick={closeMobileMenu} className={`flex white nunito-font-600 fs-16 ${styles.navLink}`}>
            <div className={`flex ${styles.linkWord}`}>
              <img src={link.icon} alt={link.alt} />
              <span>{link.name}</span>
            </div>
            {link.rightIcon && <img src={link.rightIcon} alt={link.alt} />}
          </Link>
          {(index === 1 || index === 6) && <hr className={`white ${styles.line} ${styles.line2}`} />}
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.displayName = 'Navigation';

Navigation.defaultProps = {
  closeMobileMenu: () => false,
};

Navigation.propTypes = {
  closeMobileMenu: Proptypes.func,
};

export default Navigation;

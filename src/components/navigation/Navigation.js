import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const Navigation = ({ navigationLinksData }) => (
  <nav>
    <ul>
      {navigationLinksData.map((link) => (
        <li key={link.name}>
          <Link to={link.path}>
            <img src={link.icon} alt={link.alt} />
            <span>{link.name}</span>
            {link.rightIcon && <img src={link.rightIcon} alt={link.alt} />}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);

Navigation.displayName = 'Navigation';

Navigation.propTypes = {
  navigationLinksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rightIcon: PropTypes.string, // Optional
    }),
  ).isRequired,
};

export default Navigation;

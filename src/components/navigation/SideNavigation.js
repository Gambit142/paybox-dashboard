import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Navigation from './MobileNavigation';

const SideNavigation = ({ navigationLinksData }) => (
  <section>
    <Link to="/home" className="logo">
      <span className="upper-logo-text">Paybox</span>
      <span className="lower-logo-text">by LibertyPay</span>
    </Link>
    <Navigation navigationLinksData={navigationLinksData} />
  </section>
);

SideNavigation.displayName = 'SideNavigation';

SideNavigation.propTypes = {
  navigationLinksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rightIcon: PropTypes.string, // Optional
      component: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
};

export default SideNavigation;

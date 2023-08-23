import { Link } from 'react-router-dom';
import Navigation from './MobileNavigation';
import styles from './navigation.module.css';

const SideNavigation = () => (
  <section>
    <Link to="/home" className={`flex flex-column ${styles.logo}`}>
      <span className={`clash-display-font-700 white ${styles.upperLogoText}`}>Paybox</span>
      <span className="clash-display-font-400 white fs-12">by LibertyPay</span>
    </Link>
    <Navigation />
  </section>
);

SideNavigation.displayName = 'SideNavigation';

export default SideNavigation;

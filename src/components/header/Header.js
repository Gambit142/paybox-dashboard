import { useState } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import Navigation from '../navigation/MobileNavigation';
import styles from './header.module.css';

const Header = ({ title }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const mobileMenuStateChangeHandler = ({ isOpen }) => {
    setIsMobileMenuOpen(isOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <section>
      <MediaQuery maxWidth={768}>
        <header className={`flex secondary-background ${styles.header}`}>
          <h1 className="white nunito-font-500 line-height-1">{title}</h1>
          <button type="button" onClick={toggleMobileMenu} className="white montserrat-font-500 fs-14 line-height-1">
            Menu
          </button>
        </header>
        <Menu
          isOpen={isMobileMenuOpen}
          onStateChange={mobileMenuStateChangeHandler}
        >
          <Navigation closeMobileMenu={closeMobileMenu} />
        </Menu>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <header className={styles.headerDesktopContainer}>
          <div className={`${styles.headerDesktopDiv} flex`}>
            <h1 className="nunito-font-600">{title}</h1>
            <div className={`flex ${styles.loginInfo}`}>
              <div className={styles.iconPlaceholder}>
                <img src="/assets/images/notification-bing.svg" alt="notification icon" />
              </div>
              <img src="/assets/images/Francis_Ugorji.jpg" alt="user icon" className={styles.userAvatar} />
              <div className={`${styles.userInfoDiv}`}>
                <h2 className="nunito-font-700 fs-14">Francis Ugorji</h2>
                <div className={`flex ${styles.emailDiv}`}>
                  <span className={`nunito-font-400 fs-10 ${styles.email}`}>nzefrancismaryeugorji@gmail.com</span>
                  <img src="/assets/images/Chevron-down.svg" alt="chevron down icon" />
                </div>
              </div>
            </div>
          </div>
        </header>
      </MediaQuery>
    </section>
  );
};

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

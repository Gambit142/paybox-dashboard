import { useState } from 'react';
import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';
import { slide as Menu } from 'react-burger-menu';
import MobileNavigation from '../navigation/MobileNavigation';
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
          <MobileNavigation closeMobileMenu={closeMobileMenu} />
        </Menu>
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <header>
          <div>
            <h1>{title}</h1>
            <div>
              <img src="/assets/images/notification-bing.svg" alt="notification icon" />
              <img src="/assets/images/Francis_Ugorji.jpg" alt="user icon" />
              <div>
                <h2>Francis Ugorji</h2>
                <div>
                  <span>nzefrancismaryeugorji@gmail.com</span>
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

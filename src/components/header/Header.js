import MediaQuery from 'react-responsive';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <header>
    <MediaQuery maxWidth={768}>
      <h1>{title}</h1>
      <button type="button">
        Menu
      </button>
    </MediaQuery>
    <MediaQuery minWidth={769}>
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

    </MediaQuery>
  </header>
);

Header.displayName = 'Header';

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;

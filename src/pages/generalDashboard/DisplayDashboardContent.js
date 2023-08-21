import { Routes, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/header/Header';

const DisplayDashboardContent = ({ navigationLinksData }) => (
  <Routes>
    {navigationLinksData.map((link) => (
      <Route
        key={link.name}
        path={link.path}
        exact
        element={(
          <div>
            <Header title={link.name} />
            <link.component />
          </div>
            )}
      />
    ))}
  </Routes>
);

DisplayDashboardContent.displayName = 'DisplayDashboardContent';

DisplayDashboardContent.propTypes = {
  navigationLinksData: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      icon: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      rightIcon: PropTypes.string, // Optional, no .isRequired
      component: PropTypes.elementType.isRequired,
    }),
  ).isRequired,
};

export default DisplayDashboardContent;

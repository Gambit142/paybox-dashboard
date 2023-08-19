import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import MediaQuery from 'react-responsive';
import Navigation from '../../components/navigation/Navigation';
import SideNavigation from '../../components/navigation/SideNavigation';
import navigationLinksData from '../../data/navigationLinksData';
import Header from '../../components/header/Header';

const GeneralDashboard = () => (
  <>
    <Router>
      <MediaQuery maxWidth={768}>
        ... // Add the Header component here
        <Navigation navigationLinksData={navigationLinksData} />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <section>
          <aside>
            <SideNavigation navigationLinksData={navigationLinksData} />
          </aside>
          <section>
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
          </section>
        </section>
      </MediaQuery>
    </Router>
  </>
);

GeneralDashboard.displayName = 'GeneralDashboard';

export default GeneralDashboard;

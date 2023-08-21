import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import MediaQuery from 'react-responsive';
import SideNavigation from '../../components/navigation/SideNavigation';
import navigationLinksData from '../../data/navigationLinksData';
import DisplayDashboardContent from './DisplayDashboardContent';

const GeneralDashboard = () => (
  <>
    <Router>
      <MediaQuery maxWidth={768}>
        <DisplayDashboardContent navigationLinksData={navigationLinksData} />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <section>
          <aside>
            <SideNavigation navigationLinksData={navigationLinksData} />
          </aside>
          <section>
            <DisplayDashboardContent navigationLinksData={navigationLinksData} />
          </section>
        </section>
      </MediaQuery>
    </Router>
  </>
);

GeneralDashboard.displayName = 'GeneralDashboard';

export default GeneralDashboard;

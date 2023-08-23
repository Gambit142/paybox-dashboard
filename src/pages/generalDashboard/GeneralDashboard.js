import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react';
import MediaQuery from 'react-responsive';
import SideNavigation from '../../components/navigation/SideNavigation';
import navigationLinksData from '../../data/navigationLinksData';
import DisplayDashboardContent from './DisplayDashboardContent';
import styles from './general-dashboard.module.css';

const GeneralDashboard = () => (
  <>
    <Router>
      <MediaQuery maxWidth={768}>
        <DisplayDashboardContent navigationLinksData={navigationLinksData} />
      </MediaQuery>
      <MediaQuery minWidth={769}>
        <section className={`background-blue flex ${styles.generalDashboardContainer}`}>
          <aside>
            <SideNavigation />
          </aside>
          <section className={styles.displayContentContainer}>
            <DisplayDashboardContent navigationLinksData={navigationLinksData} />
          </section>
        </section>
      </MediaQuery>
    </Router>
  </>
);

GeneralDashboard.displayName = 'GeneralDashboard';

export default GeneralDashboard;

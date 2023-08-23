import AnalyticsDashboard from '../pages/analyticsDashboard/AnalyticsDashboard';
import Personal from '../pages/personal/Personal';
import SaleHub from '../pages/sale-hub/SaleHub';
import TalentManagement from '../pages/talent-management/TalentManagement';
import SpendManagement from '../pages/spend-management/SpendManagement';
import Cards from '../pages/cards/Cards';
import Leaderboard from '../pages/leaderboard/Leaderboard';
import ProfileSettings from '../pages/profile-settings/ProfileSettings';
import BankPerformance from '../pages/bank-performance/BankPerformance';

const navigationLinksData = [
  {
    name: 'Home',
    icon: '/assets/images/home-icon.svg',
    path: '/',
    alt: 'home icon',
    component: AnalyticsDashboard,
  },
  {
    name: 'Analytics Dashboard',
    icon: '/assets/images/analytics-icon.svg',
    path: '/analytics_dashboard',
    alt: 'analytics icon',
    component: AnalyticsDashboard,
  },
  {
    name: 'Personal',
    icon: '/assets/images/strongbox.svg',
    path: '/personal',
    alt: 'strongbox icon',
    rightIcon: '/assets/images/Chevron-Right.svg',
    component: Personal,
  },
  {
    name: 'Sale Hub',
    icon: '/assets/images/shop.svg',
    path: '/sale_hub',
    alt: 'shop icon',
    rightIcon: '/assets/images/Chevron-Right.svg',
    component: SaleHub,
  },
  {
    name: 'Talent management',
    icon: '/assets/images/3dcube.svg',
    path: '/talent_management',
    alt: '3d cube icon',
    rightIcon: '/assets/images/Chevron-Right.svg',
    component: TalentManagement,
  },
  {
    name: 'Spend management',
    icon: '/assets/images/card-edit.svg',
    path: '/spend_management',
    alt: 'card edit icon',
    rightIcon: '/assets/images/Chevron-Right.svg',
    component: SpendManagement,
  },
  {
    name: 'Cards',
    icon: '/assets/images/cards.svg',
    path: '/cards',
    alt: 'cards icon',
    component: Cards,
  },
  {
    name: 'Leaderboard',
    icon: '/assets/images/medal-star.svg',
    path: '/leaderboard',
    alt: 'medal star icon',
    component: Leaderboard,
  },
  {
    name: 'Profile & Settings',
    icon: '/assets/images/security-user.svg',
    path: '/profile_settings',
    alt: 'security user icon',
    component: ProfileSettings,
  },
  {
    name: 'Bank performance',
    icon: '/assets/images/radar.svg',
    path: '/bank_performance',
    alt: 'radar icon',
    rightIcon: '/assets/images/Chevron-Right.svg',
    component: BankPerformance,
  },
];

export default navigationLinksData;

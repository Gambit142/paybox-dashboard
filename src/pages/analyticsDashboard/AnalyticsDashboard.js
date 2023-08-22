import { useMediaQuery } from 'react-responsive';
import AccountSummary from '../../components/analytics-dashboard/AccountSummary';
import AggregateMetrics from '../../components/analytics-dashboard/AggregateMetrics';
import {
  aggregateMetricsForTwoWeeksDesktop,
  aggregateMetricsForTwoWeeksMobile,
} from '../../data/transactionDetails';

const AnalyticsDashboard = () => {
  const mobile = useMediaQuery({ query: '(max-width: 768px)' });
  const arrayData = mobile ? aggregateMetricsForTwoWeeksMobile : aggregateMetricsForTwoWeeksDesktop;
  return (
    <section className="container-padding">
      <AccountSummary />
      <AggregateMetrics aggregateMetricsData={arrayData} />
    </section>
  );
};

AnalyticsDashboard.displayName = 'AnalyticsDashboard';

export default AnalyticsDashboard;

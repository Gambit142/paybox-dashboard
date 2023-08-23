import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import AggregateMetrics from '../AggregateMetrics';
import { aggregateMetricsForTwoWeeksDesktop } from '../../../data/transactionDetails';

describe('AggregateMetrics', () => {
  test('AggregateMetrics renders correctly', () => {
    const tree = renderer.create(<AggregateMetrics aggregateMetricsData={aggregateMetricsForTwoWeeksDesktop} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  test('AggregateMetrics renders aggregate metrics', async () => {
    render(<AggregateMetrics aggregateMetricsData={aggregateMetricsForTwoWeeksDesktop} />);
    await waitFor(() => {
      expect(screen.getByText('Total transfers')).toBeInTheDocument();
      expect(screen.getByText('Total inflows')).toBeInTheDocument();
      expect(screen.getByText('Total transactions')).toBeInTheDocument();
    });
  });
  test('AggregateMetrics renders time intervals', async () => {
    render(<AggregateMetrics aggregateMetricsData={aggregateMetricsForTwoWeeksDesktop} />);
    const elements = await screen.findAllByText('Today');
    expect(elements.length).toBe(4);
    expect(elements[0]).toBeInTheDocument();
  });
});
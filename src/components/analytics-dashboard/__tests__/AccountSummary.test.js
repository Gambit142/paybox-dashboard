import { render, screen, waitFor } from '@testing-library/react';
import renderer from 'react-test-renderer';
import AccountSummary from '../AccountSummary';
import '@testing-library/jest-dom';

jest.mock('../../../data/accountDetails', () => [

  {
    detailType: 'Total savings balance',
    detailAmount: '₦194,000',
  },
  {
    detailType: 'Total customers',
    detailAmount: '₦919',
  },
  {
    detailType: 'Total POS transactions',
    detailAmount: '0',
  },
]);

describe('AccountSummary', () => {
  test('AccountSummary renders correctly', () => {
    const tree = renderer.create(<AccountSummary />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('AccountSummary renders wallet balance', async () => {
    render(<AccountSummary />);
    await waitFor(() => {
      const walletBalanceElement = screen.getByText('Wallet Balance');
      expect(walletBalanceElement).toBeInTheDocument();
    });
  });

  test('AccountSummary renders account details', async () => {
    render(<AccountSummary />);
    await waitFor(() => {
      // const totalSavings = screen.getByText('Total savings balance');
      // const totalCustomers = screen.getByText('Total customers');
      // const totalPOSTransactions = screen.getByText('Total POS transactions');
      expect(screen.getByText('Total savings balance')).toBeInTheDocument();
      expect(screen.getByText('Total customers')).toBeInTheDocument();
      expect(screen.getByText('Total POS transactions')).toBeInTheDocument();
    });
  });
});

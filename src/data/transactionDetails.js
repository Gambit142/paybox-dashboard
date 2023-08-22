const twoMillion = '₦2,000,000';
const fiveMillion = '₦5,000,000';
const onePointTwoMillion = '₦1,200,000';

// Data for Aggregate Metrics for Two Weeks for Mobile version starts here

const timeIntervalsMobile = [
  {
    label: 'Today',
    value: onePointTwoMillion,
  },
  {
    label: 'Yesterday',
    value: onePointTwoMillion,
  },
  {
    label: 'This week',
    value: onePointTwoMillion,
  },
  {
    label: 'Last week',
    value: onePointTwoMillion,
  },
];

const aggregateMetricsForTwoWeeksMobile = [
  {
    generalLabel: 'Total transfers',
    timeIntervalsMobile,
  },
  {
    generalLabel: 'Total inflows',
    timeIntervalsMobile,
  },
  {
    generalLabel: 'Total transactions',
    timeIntervalsMobile,
  },
  {
    generalLabel: 'Transaction count',
    timeIntervalsMobile,
  },
];

// Data for Aggregate Metrics for Two Weeks for Mobile version ends here

// Data for Aggregate Metrics for Two Weeks for Desktop version starts here
const timeIntervalsDesktop = [
  {
    label: 'Today',
    value: twoMillion,
  },
  {
    label: 'Yesterday',
    value: fiveMillion,
  },
  {
    label: 'This week',
    value: fiveMillion,
  },
  {
    label: 'Last week',
    value: fiveMillion,
  },
];

// Data for Aggregate Metrics for Two Weeks for Desktop version ends here

const aggregateMetricsForTwoWeeksDesktop = [
  {
    generalLabel: 'Total transfers',
    timeIntervalsDesktop,
  },
  {
    generalLabel: 'Total inflows',
    timeIntervalsDesktop,
  },
  {
    generalLabel: 'Total transactions',
    timeIntervalsDesktop,
  },
  {
    generalLabel: 'Transaction count',
    timeIntervalsDesktop,
  },
];

// Data for Financial Metrics starts here

const financialMetrics = [
  {
    generalLabel: 'Total cashout',
    metric: [
      {
        label: 'Today',
        value: '₦1,200,000',
      },
      {
        label: 'Yesterday',
        value: '₦1,200,000',
      },
    ],
  },
  {
    generalLabel: 'Transaction status',
    metric: [
      {
        label: 'Successful',
        value: '422',
        color: 'green',
      },
      {
        label: 'Failed',
        value: '18',
        color: 'red',
      },
    ],
  },
  {
    generalLabel: 'Average Transaction Count',
    metric: [
      {
        label: 'Value',
        value: '₦20,400',
      },
      {
        label: 'Count',
        value: '422',
      },
    ],
  },
  {
    generalLabel: 'Total commission',
    metric: [
      {
        label: 'POS commission',
        value: '₦87,000',
      },
      {
        label: 'Lotto commission',
        value: '₦102,000',
      },
    ],
  },
  {
    generalLabel: 'Average commission per transaction',
    metric: [
      {
        label: 'POS commission',
        value: '₦500',
      },
      {
        label: 'Lotto commission',
        value: '₦200',
      },
    ],
  },
];

// Data for Financial Metrics ends here

export {
  aggregateMetricsForTwoWeeksDesktop,
  aggregateMetricsForTwoWeeksMobile,
  financialMetrics,
};

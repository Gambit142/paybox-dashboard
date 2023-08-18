const basicInformationDetails = [
  {
  label: 'Total savings balance',
  value: '₦194,000'
  },
  {
    label: 'Total customers',
    value: '₦919'
  },
  {
    label: 'Total POS',
    value: '0'
  }
];

const twoMillion = '₦2,000,000';
const fiveMillion = '₦5,000,000';

const timeIntervals = [
  {
    label: 'Today',
    value: twoMillion
  },
  {
    label: 'Yesterday',
    value: fiveMillion
  },
  {
    label: 'This week',
    value: fiveMillion
  },
  {
    label: 'Last week',
    value: fiveMillion
  }
];

const aggregateMetricsForTwoWeeks = [
  {
    generalLabel: 'Total transfer',
    timeIntervals
  },
  {
    generalLabel: 'Total inflow',
    timeIntervals
  },
  {
    generalLabel: 'Total transactions',
    timeIntervals
  },
  {
    generalLabel: 'Total count',
    timeIntervals
  }
]

const fifnacialMetrics = [
  {
    generalLlabel: 'Total Cashout',
    metric: [
      {
        label: 'Today',
        value: '₦1,200,000'
      },
      {
        label: 'Yesterday',
        value: '₦1,200,000'
      }
    ]
  },
  {
    generalLlabel: 'Transaction status',
    metric: [
      {
        label: 'Successful',
        value: '422',
        color: 'green'
      },
      {
        label: 'Failed',
        value: '18',
        color: 'red'
      }
    ]
  },
  {
    generalLlabel: 'Average Transaction Count',
    metric: [
      {
        label: 'Value',
        value: '₦20,400'
      },
      {
        label: 'Count',
        value: '422'
      }
    ]
  },
  {
    generalLlabel: 'Total commission',
    metric: [
      {
        label: 'POS commission',
        value: '₦87,000'
      },
      {
        label: 'Lotto commission',
        value: '₦102,000'
      }
    ]
  },
  {
    generalLlabel: 'Average commission per transaction',
    metric: [
      {
        label: 'POS commission',
        value: '₦500'
      },
      {
        label: 'Lotto commission',
        value: '₦200'
      }
    ]
  }
]
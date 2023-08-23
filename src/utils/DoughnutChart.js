import React from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer,
} from 'recharts';
import { useMediaQuery } from 'react-responsive';

const data = [
  { name: 'Label 1', value: 60 },
  { name: 'Label 2', value: 20 },
  { name: 'Label 3', value: 20 },
];

const COLORS = ['#032282', '#F4BE38', '#EDE1FF'];

const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * (Math.PI / 180));
  const y = cy + radius * Math.sin(-midAngle * (Math.PI / 180));
  const circleRadius = 18;

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r={circleRadius}
        fill="white"
        fillOpacity="1"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="central"
        fill="black"
        fontSize="12px"
        fontWeight="600"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    </g>
  );
};

const DoughnutChart = () => {
  const heightValue = useMediaQuery({ query: '(max-width: 768px)' }) ? 300 : 195;
  const cyValue = useMediaQuery({ query: '(max-width: 768px)' }) ? '35%' : '58%';
  return (
    <ResponsiveContainer width="100%" height={heightValue}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="25%"
          cy={cyValue}
          innerRadius={50}
          outerRadius={75}
          paddingAngle={5}
          labelLine={false}
          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${entry.name}`} fill={COLORS[index]} />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  );
};

export default DoughnutChart;

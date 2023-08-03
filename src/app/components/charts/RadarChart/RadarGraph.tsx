import clsx from 'clsx';
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts';

const data = [
  {
    subject: 'Front',
    A: 90,
    B: 100,
    fullMark: 150,
  },
  {
    subject: 'Back',
    A: 120,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Mobile',
    A: 50,
    B: 130,
    fullMark: 150,
  },
  {
    subject: 'Infra',
    A: 140,
    B: 140,
    fullMark: 150,
  },
  {
    subject: 'Mgmt',
    A: 110,
    B: 90,
    fullMark: 150,
  },
  {
    subject: 'AI/ML',
    A: 30,
    B: 85,
    fullMark: 150,
  },
];

export const RadarGraph = () => (
  <ResponsiveContainer className={clsx('h-full', 'w-full')}>
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis />
      <Radar
        name="Mike"
        dataKey="A"
        stroke="#8884d8"
        fill="#8884d8"
        fillOpacity={0.6}
      />
    </RadarChart>
  </ResponsiveContainer>
);

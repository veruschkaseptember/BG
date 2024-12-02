'use client';

import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface ChartStatProps {
  percentage: string;
  label: string;
  color: string;
}

function RadialProgress({ value, color }: { value: string; color: string }) {
  const percentage = parseInt(value);
  const [currentPercentage, setCurrentPercentage] = React.useState(0);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentPercentage(percentage);
    }, 100);
    return () => clearTimeout(timer);
  }, [percentage]);

  return (
    <motion.div
      className="relative w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center"
      style={{
        background: `radial-gradient(closest-side, white 79%, transparent 80% 100%),
        conic-gradient(${color} ${currentPercentage}%, #e6e6e6 0)`,
      }}
      initial={{ rotate: -90 }}
      animate={{
        rotate: 0,
        transition: { duration: 1, ease: 'easeOut' },
      }}>
      <motion.span
        className="text-xs md:text-sm font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}>
        {value}
      </motion.span>
    </motion.div>
  );
}

function ChartStat({ percentage, label, color }: ChartStatProps) {
  return (
    <div className="flex items-center gap-4 md:gap-10">
      <RadialProgress value={percentage} color={color} />
      <div className="space-y-1">
        <p className="text-xl md:text-2xl font-bold">{percentage}</p>
        <p className="text-xs md:text-sm text-[#747474]">{label}</p>
      </div>
    </div>
  );
}

export function ChartStats() {
  const stats = [
    { percentage: '24%', label: 'Pending', color: '#FF966B', left: '82px' },
    { percentage: '56%', label: 'Registered', color: '#54D62C', left: '441px' },
    {
      percentage: '20%',
      label: 'Post Treatment',
      color: '#1890FF',
      left: '800px',
    },
  ];

  return (
    <div
      className="w-full px-4 
      xs:w-[400px] xs:px-0
      sm:w-[540px]
      md:w-[720px]
      lg:w-[940px]
      xl:w-[1080px] 
      mx-auto">
      <Card className="min-h-[155px] rounded-2xl shadow-[0px_0px_2px_rgba(145,_158,_171,_0.2),_0px_12px_24px_-4px_rgba(145,_158,_171,_0.12)]">
        <CardContent className="relative h-full">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="absolute top-[37px] w-[229px] flex flex-row items-center justify-start gap-[40px]"
              style={{ left: stat.left }}>
              <RadialProgress
                value={parseInt(stat.percentage)}
                color={stat.color}
              />
              <div className="flex flex-col items-start justify-start gap-[4px]">
                <p className="text-[24px] font-bold leading-[36px] text-[#414141]">
                  {stat.percentage}
                </p>
                <p className="text-[14px] leading-[22px] text-[#747474]">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </div>
  );
}

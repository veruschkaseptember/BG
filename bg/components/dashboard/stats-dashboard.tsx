'use client';

import { Card, CardContent } from '@/components/ui/card';
import { WelcomeSection } from './welcome-section';
import Image from 'next/image';
import { motion } from 'framer-motion';

interface StatWidgetProps {
  title: string;
  value: string;
  growth: string;
  icon: string;
}

const cardVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 200,
      damping: 15,
    },
  },
};

const MotionCard = motion(Card);

function StatWidget({ title, value, growth, icon }: StatWidgetProps) {
  return (
    <MotionCard
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      className="h-[154px] w-[344px]">
      <CardContent className="flex items-center justify-between p-6">
        <div className="space-y-2">
          <p className="font-sans font-semibold text-sm text-[#414141] line-clamp-2">
            {title}
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <Image
                src="/indicator.png"
                alt="Growth"
                width={24}
                height={24}
                className="object-cover w-[24px] h-[24px]"
              />
              <span className="font-sans font-semibold text-sm">{growth}</span>
            </div>
            <p className="font-sans font-bold text-3xl">{value}</p>
          </div>
        </div>
        <Image
          src={icon}
          alt={title}
          width={64}
          height={64}
          className="object-contain w-[64px] h-[64px]"
        />
      </CardContent>
    </MotionCard>
  );
}

export function StatsDashboard() {
  const stats = [
    {
      title: 'Total Practices',
      value: '11',
      growth: '+15%',
      icon: '/icon-base1@2x.png',
    },
    {
      title: 'Total Subscribers',
      value: '261',
      growth: '+15%',
      icon: '/icon-base-1@2x.png',
    },
    {
      title: 'Total Treatments',
      value: '135',
      growth: '+15%',
      icon: '/icon-base-2@2x.png',
    },
    {
      title: 'Total Consents',
      value: '135',
      growth: '+15%',
      icon: '/icon-base-3@2x.png',
    },
    {
      title: 'Total Consents signed',
      value: '2159',
      growth: '+15%',
      icon: '/icon-base-3@2x.png',
    },
    {
      title: 'Total Fact sheets read',
      value: '2159',
      growth: '+15%',
      icon: '/icon-base-5.svg',
    },
  ];

  return (
    <div
      className="w-full px-4 
      xs:w-[400px] xs:px-0
      sm:w-[540px]
      md:w-[720px]
      lg:w-[940px]
      xl:w-[1077px] 
      mx-auto 
      space-y-8">
      <WelcomeSection />
      <div
        className="grid gap-4 xs:gap-6
        grid-cols-1
        xs:grid-cols-2
        md:grid-cols-3">
        {stats.map((stat) => (
          <StatWidget key={stat.title} {...stat} />
        ))}
      </div>
    </div>
  );
}

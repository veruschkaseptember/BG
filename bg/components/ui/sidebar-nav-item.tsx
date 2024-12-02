import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface SidebarNavItemProps {
  icon: string;
  text: string;
  isActive?: boolean;
  path: string;
}
export function SidebarNavItem({
  icon,
  text,
  isActive = false,
  path,
}: SidebarNavItemProps) {
  if (!path) {
    throw new Error(`Path is required for nav item "${text}"`);
  }

  return (
    <motion.div
      whileHover={{ x: 4 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.2 }}>
      <Link
        href={path}
        className={cn(
          'flex items-center gap-3 xs:gap-4',
          'px-3 xs:px-4 py-2 xs:py-3',
          'rounded-lg',
          'transition-all duration-200 ease-in-out',
          'hover:bg-[#67ADB9]/10',
          isActive && 'bg-[#67ADB9]/10'
        )}>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}>
          <Image
            src={icon}
            alt={text}
            width={20}
            height={20}
            className="w-[18px] h-[18px] xs:w-[20px] xs:h-[20px] sm:w-[22px] sm:h-[22px] shrink-0"
          />
        </motion.div>
        <motion.span
          className={cn(
            'text-xs xs:text-sm',
            'font-semibold',
            'leading-[20px] xs:leading-[22px]',
            isActive ? 'text-[#578388]' : 'text-[#414141]'
          )}
          initial={{ x: -10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}>
          {text}
        </motion.span>
      </Link>
    </motion.div>
  );
}

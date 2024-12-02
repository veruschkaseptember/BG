'use client';

import { useState, createContext, useContext, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const SidebarContext = createContext<{
  open: boolean;
  setOpen: (open: boolean) => void;
  animate: boolean;
}>({
  open: true,
  setOpen: () => {},
  animate: true,
});

const navItems = [
  { icon: '/home.svg', text: 'Dashboard', path: '/' },
  { icon: '/uusersquare.svg', text: 'My Profile', path: '/profile' },
  {
    icon: '/umedkit.svg',
    text: 'Manage Practices',
    path: '/#practices',
    scrollTo: 'practices-table',
  },
  { icon: '/ufileinfoalt.svg', text: 'Logs', path: '/logs' },
];

const LogoLink = ({ className }: { className?: string }) => (
  <Link href="/" className={className}>
    <Image
      src="/logo.svg"
      alt="Logo"
      width={160}
      height={32}
      className="transition-all duration-300"
    />
  </Link>
);

const isPathActive = (itemPath: string, currentPath: string) => {
  if (itemPath === '/') {
    return currentPath === '/';
  }
  if (itemPath.includes('#')) {
    return false;
  }
  return currentPath === itemPath;
};

const NavItem = ({
  item,
  isActive,
  onClick,
  isMobile,
}: {
  item: (typeof navItems)[0];
  isActive: boolean;
  onClick?: () => void;
  isMobile?: boolean;
}) => {
  const { open } = useContext(SidebarContext);
  const router = useRouter();
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = (e: React.MouseEvent) => {
    if (item.text === 'Dashboard') {
      e.preventDefault();
      router.push('/');
    } else if (item.scrollTo) {
      e.preventDefault();
      const element = document.getElementById(item.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    onClick?.();
  };

  return (
    <motion.div whileHover={{ scale: 1.02 }} transition={{ duration: 0.2 }}>
      <Link
        href={item.path}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={cn(
          'flex items-center rounded-lg transition-all duration-300 ease-in-out',
          'py-3',
          open ? 'px-4' : 'px-0 justify-center',
          isActive ? 'text-[#5F97A0]' : 'text-gray-700',
          !isActive && isHovered ? 'bg-gray-100' : ''
        )}>
        <div className="flex-shrink-0 w-6 h-6 flex items-center justify-center">
          <motion.div
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}>
            <Image
              src={item.icon}
              alt={item.text}
              width={24}
              height={24}
              className="transition-transform duration-300"
            />
          </motion.div>
        </div>
        <motion.span
          animate={{
            opacity: open ? 1 : 0,
            width: open ? 'auto' : 0,
            marginLeft: open ? '12px' : '0',
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
          className="overflow-hidden whitespace-nowrap">
          {item.text}
        </motion.span>
      </Link>
    </motion.div>
  );
};

export function Sidebar() {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 992) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <SidebarContext.Provider value={{ open, setOpen, animate: true }}>
      <DesktopSidebar />
      <MobileSidebar />
    </SidebarContext.Provider>
  );
}

const DesktopSidebar = () => {
  const { open } = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <motion.aside
      className="hidden lg:flex flex-col fixed top-0 left-0 h-screen bg-white shadow-lg overflow-hidden"
      animate={{
        width: open ? '280px' : '80px',
      }}
      transition={{
        duration: 0.3,
        ease: 'easeInOut',
      }}>
      <div className="p-6">
        <motion.div
          animate={{
            width: open ? '160px' : '40px',
          }}
          transition={{ duration: 0.3 }}>
          <LogoLink className="mb-8 block" />
        </motion.div>
        <nav className="space-y-2">
          {navItems.map((item) => (
            <NavItem
              key={item.path}
              item={item}
              isActive={isPathActive(item.path, pathname)}
            />
          ))}
        </nav>
      </div>
    </motion.aside>
  );
};

const MobileSidebar = () => {
  const { open, setOpen } = useContext(SidebarContext);
  const pathname = usePathname();

  return (
    <>
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 lg:hidden"
        onClick={() => setOpen(!open)}>
        <Menu className="h-6 w-6" />
      </Button>

      <AnimatePresence>
        {open && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="fixed top-0 left-0 w-[280px] h-screen bg-white z-50 lg:hidden"
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 20 }}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4"
                onClick={() => setOpen(false)}>
                <X className="h-6 w-6" />
              </Button>

              <div className="p-6 pt-16">
                <LogoLink className="mb-8 block" />
                <nav className="space-y-2">
                  {navItems.map((item) => (
                    <NavItem
                      key={item.path}
                      item={item}
                      isActive={isPathActive(item.path, pathname)}
                      onClick={() => setOpen(false)}
                      isMobile={true}
                    />
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

'use client';

import { useState, useEffect } from 'react';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from '@/components/ui/dropdown-menu';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';

interface NotificationItem {
  id: string;
  title: string;
  preview: string;
  date: string;
  userImage: string;
  actionImage?: string;
}

const notificationVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, height: 0 },
};

export function DashboardHeader() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [notifications, setNotifications] = useState<NotificationItem[]>([
    {
      id: '1',
      title: 'New Registration',
      preview: 'Alex Fredricks',
      date: '07 Oct 2022',
      userImage: '/img@2x.png',
      actionImage: '/iconbutton-1@2x.png',
    },
    {
      id: '2',
      title: 'New Consent Added',
      preview: 'Blake Robertson',
      date: '07 Oct 2022',
      userImage: '/img@2x.png',
      actionImage: '/iconbutton-1@2x.png',
    },
  ]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDelete = (id: string) => {
    setNotifications((prev) => prev.filter((item) => item.id !== id));
  };

  const clearNotifications = () => {
    setNotifications([]);
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    router.push('/signin');
  };

  const handleProfile = () => {
    router.push('/profile');
  };

  return (
    <header
      className={cn(
        'sticky top-0 right-0 w-full z-40 transition-all duration-200',
        'border-b border-neutral-200/40',
        isScrolled && 'bg-white/80 backdrop-blur-md shadow-sm'
      )}>
      <div className="max-w-screen-2xl mx-auto w-full">
        <div className="flex items-center justify-end h-[76px] px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 sm:gap-4">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="relative p-0">
                  {notifications.length > 0 && (
                    <Badge className="absolute -top-1 -right-1 z-10 h-5 w-5 rounded-full bg-[#F04438]">
                      {notifications.length}
                    </Badge>
                  )}
                  <Avatar className="h-11 w-11">
                    <AvatarImage src="/iconbutton@2x.png" alt="Notifications" />
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-[300px] sm:w-[360px] p-0"
                sideOffset={8}>
                <div className="p-5">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold text-base">Notifications</h3>
                      <p className="text-sm text-[#747474]">
                        You have {notifications.length} unread messages
                      </p>
                    </div>
                  </div>
                </div>
                <Separator />
                <div className="max-h-[400px] overflow-auto">
                  <AnimatePresence mode="popLayout">
                    {notifications.map((notification) => (
                      <motion.div
                        key={notification.id}
                        variants={notificationVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className="p-4 flex items-start gap-3 hover:bg-gray-50">
                        <Image
                          src={notification.userImage}
                          alt=""
                          width={40}
                          height={40}
                          className="rounded-full"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-semibold truncate">
                            {notification.title}
                          </p>
                          <p className="text-sm text-[#747474] truncate">
                            {notification.preview}
                          </p>
                          <p className="text-xs text-[#ABABAB]">
                            {notification.date}
                          </p>
                        </div>
                        {notification.actionImage && (
                          <Image
                            src={notification.actionImage}
                            alt="Action"
                            width={36}
                            height={36}
                            className="rounded-full cursor-pointer flex-shrink-0"
                            onClick={() => handleDelete(notification.id)}
                          />
                        )}
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </div>
                <Separator />
                <div className="p-2">
                  <Button
                    variant="ghost"
                    className="w-full text-[#67ADB9]"
                    onClick={clearNotifications}>
                    Clear All
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>

            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-3">
                <Avatar className="h-10 w-10 bg-[rgba(103,173,185,0.08)]">
                  <AvatarFallback className="text-[#578388]">AS</AvatarFallback>
                </Avatar>
                <span className="hidden md:inline font-semibold text-[#414141]">
                  Adrian Stefan
                </span>
                <ChevronDown className="h-4 w-4 text-[#578388]" />
              </DropdownMenuTrigger>

              <DropdownMenuContent
                align="end"
                className="w-[220px] rounded-xl overflow-hidden p-0 shadow-[0px_0px_2px_rgba(145,_158,_171,_0.24),_-20px_20px_40px_rgba(145,_158,_171,_0.24)]"
                sideOffset={8}>
                <div className="relative">
                  <Image
                    className="absolute -top-2 right-6 w-[18px] h-[8px]"
                    src="/caret1.svg"
                    alt=""
                    width={18}
                    height={8}
                  />

                  <div className="pt-4 px-6 pb-4">
                    <div className="space-y-1">
                      <p className="text-base font-semibold leading-6 text-[#414141]">
                        Adrian Stefan
                      </p>
                      <p className="text-sm leading-[22px] text-[#747474]">
                        adrian@mrfertility.co.za
                      </p>
                    </div>
                  </div>

                  <Separator className="w-full" />

                  <div className="py-4">
                    <DropdownMenuItem
                      className="px-6 py-2 text-sm hover:bg-gray-50"
                      onClick={handleProfile}>
                      <div className="flex items-center gap-2">Profile</div>
                    </DropdownMenuItem>

                    <Separator className="my-2" />

                    <DropdownMenuItem
                      className="px-6 py-2 text-sm text-[#F04438] hover:bg-gray-50"
                      onClick={handleLogout}>
                      <div className="flex items-center gap-2">Logout</div>
                    </DropdownMenuItem>
                  </div>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
    </header>
  );
}

'use client';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Sidebar } from '@/components/ui/sidebar';

const dummyProfile = {
  name: 'Adrian Stefan',
  email: 'adrian@mrfertility.co.za',
  role: 'Administrator',
  phone: '+27 123 456 789',
  location: 'Cape Town, South Africa',
  timezone: 'SAST (UTC+2)',
  joinedDate: 'October 2022',
  lastActive: '2 hours ago',
  notifications: {
    email: true,
    push: true,
    sms: false,
  },
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <div className="fixed left-0 top-0 h-full w-[280px]">
        <Sidebar />
      </div>
      <div className="ml-[280px]">
        <DashboardHeader />
        <main className="max-w-4xl mx-auto pt-[76px] p-8">
          <div className="space-y-6">
            {/* Profile Header */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-start gap-6">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-2xl bg-[rgba(103,173,185,0.08)] text-[#578388]">
                      AS
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h1 className="text-2xl font-semibold text-[#414141] mb-2">
                      {dummyProfile.name}
                    </h1>
                    <p className="text-[#747474]">{dummyProfile.role}</p>
                    <p className="text-[#747474]">{dummyProfile.email}</p>
                  </div>
                  <Button className="bg-[#67ADB9] hover:bg-[#5999a3]">
                    Edit Profile
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Personal Information */}
            <Card>
              <CardHeader>
                <CardTitle>Personal Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm text-[#747474]">Full Name</label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.name}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#747474]">Email</label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.email}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#747474]">Phone</label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.phone}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#747474]">Location</label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.location}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#747474]">Timezone</label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.timezone}
                    </p>
                  </div>
                  <div>
                    <label className="text-sm text-[#747474]">
                      Joined Date
                    </label>
                    <p className="text-[#414141] font-medium">
                      {dummyProfile.joinedDate}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Account Settings */}
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#414141]">
                        Email Notifications
                      </h3>
                      <p className="text-sm text-[#747474]">
                        Receive email updates about your account
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#67ADB9] text-[#67ADB9]">
                      {dummyProfile.notifications.email
                        ? 'Enabled'
                        : 'Disabled'}
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#414141]">
                        Push Notifications
                      </h3>
                      <p className="text-sm text-[#747474]">
                        Receive push notifications about your account
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#67ADB9] text-[#67ADB9]">
                      {dummyProfile.notifications.push ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-medium text-[#414141]">
                        SMS Notifications
                      </h3>
                      <p className="text-sm text-[#747474]">
                        Receive SMS updates about your account
                      </p>
                    </div>
                    <Button
                      variant="outline"
                      className="border-[#67ADB9] text-[#67ADB9]">
                      {dummyProfile.notifications.sms ? 'Enabled' : 'Disabled'}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
}

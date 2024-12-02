import { ChartStats } from '@/components/dashboard/chart-stats';
import { StatsDashboard } from '@/components/dashboard/stats-dashboard';
import { PracticesTable } from '@/components/dashboard/practices-table';
import { CustomSeparator } from '@/components/ui/custom-separator';
import { DashboardHeader } from '@/components/dashboard/dashboard-header';
import { Sidebar } from '@/components/ui/sidebar';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 h-full w-[280px]">
        <Sidebar />
        <CustomSeparator
          orientation="vertical"
          className="absolute right-0 top-0 h-full"
        />
      </div>
      <div className="ml-[280px]">
        <DashboardHeader />
        <main className="w-[1160px] mx-auto pt-[76px] space-y-6 p-8">
          <StatsDashboard />
          <ChartStats />
          <PracticesTable />
        </main>
      </div>
    </div>
  );
}

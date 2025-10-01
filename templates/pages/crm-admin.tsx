import React from 'react';
import { AdminLayoutSaaS } from '@tindeveloper/design-system';
import { CrmMetrics } from '../components/crm/CrmMetrics';
import { CrmRecentOrderTable } from '../components/crm/CrmRecentOrderTable';
import { CrmStatisticsChart } from '../components/crm/CrmStatisticsChart';
import { EstimatedRevenue } from '../components/crm/EstimatedRevenue';
import { SalePieChart } from '../components/crm/SalePieChart';
import { UpcomingSchedule } from '../components/crm/UpcomingSchedule';

/**
 * CRM Admin Dashboard Page Template
 * 
 * This template provides a complete CRM dashboard with:
 * - Key performance metrics
 * - Revenue statistics and charts
 * - Recent orders table
 * - Upcoming schedule
 * - Sale analytics
 * 
 * Usage:
 * ```tsx
 * import { CrmAdminPage } from '@tindeveloper/design-system/templates';
 * 
 * export default function AdminPage() {
 *   return <CrmAdminPage />;
 * }
 * ```
 */
export default function CrmAdminPage() {
  return (
    <AdminLayoutSaaS pageTitle="CRM Dashboard">
      <div className="grid grid-cols-12 gap-4 md:gap-6">
        {/* Key Metrics Row */}
        <div className="col-span-12">
          <CrmMetrics />
        </div>

        {/* Statistics Chart and Revenue */}
        <div className="col-span-12 xl:col-span-8">
          <CrmStatisticsChart />
        </div>

        <div className="col-span-12 xl:col-span-4">
          <EstimatedRevenue />
        </div>

        {/* Pie Chart and Schedule */}
        <div className="col-span-12 xl:col-span-6">
          <SalePieChart />
        </div>

        <div className="col-span-12 xl:col-span-6">
          <UpcomingSchedule />
        </div>

        {/* Recent Orders Table */}
        <div className="col-span-12">
          <CrmRecentOrderTable />
        </div>
      </div>
    </AdminLayoutSaaS>
  );
}

// Export for template system
export { CrmAdminPage };

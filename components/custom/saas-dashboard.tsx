import React from 'react';
import clsx from 'clsx';

export interface SaasDashboardProps {
  metrics?: {
    totalRevenue: {
      value: string;
      change: string;
      trend: 'up' | 'down';
    };
    activeUsers: {
      value: string;
      change: string;
      trend: 'up' | 'down';
    };
    customerLifetimeValue: {
      value: string;
      change: string;
      trend: 'up' | 'down';
    };
    customerAcquisitionCost: {
      value: string;
      change: string;
      trend: 'up' | 'down';
    };
  };
  recentInvoices?: Array<{
    serialNo: string;
    closeDate: string;
    user: string;
    amount: string;
    status: 'Complete' | 'Pending' | 'Cancelled';
  }>;
  activities?: Array<{
    user: string;
    action: string;
    details: string;
    time: string;
    avatar?: string;
  }>;
}

export const SaasDashboard: React.FC<SaasDashboardProps> = ({
  metrics = {
    totalRevenue: { value: '$200,45.87', change: '+2.5%', trend: 'up' },
    activeUsers: { value: '9,528', change: '+9.5%', trend: 'up' },
    customerLifetimeValue: { value: '$849.54', change: '-1.6%', trend: 'down' },
    customerAcquisitionCost: { value: '9,528', change: '+3.5%', trend: 'up' },
  },
  recentInvoices = [
    { serialNo: '#DF429', closeDate: 'April 28, 2016', user: 'Jenny Wilson', amount: '$473.85', status: 'Complete' },
    { serialNo: '#HTY274', closeDate: 'October 30, 2017', user: 'Wade Warren', amount: '$293.01', status: 'Complete' },
    { serialNo: '#LKE600', closeDate: 'May 29, 2017', user: 'Darlene Robertson', amount: '$782.01', status: 'Pending' },
    { serialNo: '#HRP447', closeDate: 'May 20, 2015', user: 'Arlene McCoy', amount: '$202.87', status: 'Cancelled' },
  ],
  activities = [
    { user: 'Francisco Grbbs', action: 'created invoice', details: 'PQ-4491C', time: 'Just Now' },
    { user: 'Courtney Henry', action: 'created invoice', details: 'HK-234G', time: '15 minutes ago' },
    { user: 'Bessie Cooper', action: 'created invoice', details: 'LH-2891C', time: '5 months ago' },
  ]
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Cancelled':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getTrendIcon = (trend: 'up' | 'down') => {
    return trend === 'up' ? (
      <svg className="w-4 h-4 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 17l9.2-9.2M17 17V7H7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 7l-9.2 9.2M7 7v10h10" />
      </svg>
    );
  };

  return (
    <div className="space-y-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Total Revenue */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metrics.totalRevenue.value}</p>
            </div>
            <div className={`flex items-center space-x-1 ${metrics.totalRevenue.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {getTrendIcon(metrics.totalRevenue.trend)}
              <span className="text-sm font-medium">{metrics.totalRevenue.change}</span>
            </div>
          </div>
        </div>

        {/* Active Users */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Active Users</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metrics.activeUsers.value}</p>
            </div>
            <div className={`flex items-center space-x-1 ${metrics.activeUsers.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {getTrendIcon(metrics.activeUsers.trend)}
              <span className="text-sm font-medium">{metrics.activeUsers.change}</span>
            </div>
          </div>
        </div>

        {/* Customer Lifetime Value */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Customer Lifetime Value</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metrics.customerLifetimeValue.value}</p>
            </div>
            <div className={`flex items-center space-x-1 ${metrics.customerLifetimeValue.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {getTrendIcon(metrics.customerLifetimeValue.trend)}
              <span className="text-sm font-medium">{metrics.customerLifetimeValue.change}</span>
            </div>
          </div>
        </div>

        {/* Customer Acquisition Cost */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Customer Acquisition Cost</p>
              <p className="text-2xl font-bold text-gray-900 dark:text-gray-100">{metrics.customerAcquisitionCost.value}</p>
            </div>
            <div className={`flex items-center space-x-1 ${metrics.customerAcquisitionCost.trend === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {getTrendIcon(metrics.customerAcquisitionCost.trend)}
              <span className="text-sm font-medium">{metrics.customerAcquisitionCost.change}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Invoices */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Recent Invoices</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                View All
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-700">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Serial No:</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Close Date</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">User</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                {recentInvoices.map((invoice, index) => (
                  <tr key={index} className="hover:bg-gray-50 dark:hover:bg-gray-700">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-gray-100">{invoice.serialNo}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">{invoice.closeDate}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{invoice.user}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-gray-100">{invoice.amount}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(invoice.status)}`}>
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Activities */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Activities</h3>
              <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
                View All
              </button>
            </div>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              {activities.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <div className="flex-shrink-0">
                    <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center">
                      <span className="text-sm font-medium text-white">
                        {activity.user.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-gray-900 dark:text-gray-100">
                      <span className="font-medium">{activity.user}</span>{' '}
                      <span className="text-gray-600 dark:text-gray-400">{activity.action}</span>{' '}
                      <span className="font-mono text-blue-600 dark:text-blue-400">{activity.details}</span>
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Additional Metrics Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Churn Rate */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Churn Rate</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View More
            </button>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">4.26%</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">0.31% than last Week</p>
          </div>
        </div>

        {/* User Growth */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">User Growth</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View More
            </button>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold text-gray-900 dark:text-gray-100">3,768</p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">+3.85% than last Week</p>
          </div>
        </div>

        {/* Conversion Funnel */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100">Conversion Funnel</h3>
            <button className="text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
              View More
            </button>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Visitors</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">100%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '100%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Signups</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">45%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '45%' }}></div>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600 dark:text-gray-400">Customers</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-100">12%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{ width: '12%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

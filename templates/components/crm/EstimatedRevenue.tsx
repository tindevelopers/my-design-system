import React from 'react';

/**
 * Estimated Revenue Component
 * 
 * Displays estimated revenue projections and current revenue metrics.
 * Shows key financial indicators for the CRM dashboard.
 */
export const EstimatedRevenue: React.FC = () => {
  const revenueData = [
    { label: 'This Month', value: '$45,230', change: '+12.5%', trend: 'up' },
    { label: 'Last Month', value: '$40,180', change: '+8.2%', trend: 'up' },
    { label: 'This Quarter', value: '$128,450', change: '+15.3%', trend: 'up' },
    { label: 'Estimated Annual', value: '$485,200', change: '+18.7%', trend: 'up' },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === 'up') {
      return (
        <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Revenue Overview
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Current and projected revenue metrics
        </p>
      </div>

      <div className="space-y-4">
        {revenueData.map((item, index) => (
          <div key={index} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 dark:bg-gray-800/50">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.label}
              </p>
              <p className="text-lg font-semibold text-gray-800 dark:text-white">
                {item.value}
              </p>
            </div>
            <div className="flex items-center gap-1">
              {getTrendIcon(item.trend)}
              <span className="text-sm text-green-600 dark:text-green-400 font-medium">
                {item.change}
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 p-4 rounded-lg bg-blue-50 dark:bg-blue-900/20">
        <div className="flex items-center gap-2 mb-2">
          <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
          <span className="text-sm font-medium text-blue-800 dark:text-blue-300">
            Revenue Growth
          </span>
        </div>
        <p className="text-sm text-blue-700 dark:text-blue-400">
          Revenue is trending upward with consistent month-over-month growth.
        </p>
      </div>
    </div>
  );
};

import React from 'react';

/**
 * CRM Statistics Chart Component
 * 
 * Displays a chart showing CRM statistics over time.
 * This is a simplified version that can be enhanced with
 * actual chart libraries like Chart.js or Recharts.
 */
export const CrmStatisticsChart: React.FC = () => {
  const chartData = [
    { month: 'Jan', deals: 45, revenue: 12000 },
    { month: 'Feb', deals: 52, revenue: 15000 },
    { month: 'Mar', deals: 48, revenue: 13500 },
    { month: 'Apr', deals: 61, revenue: 18000 },
    { month: 'May', deals: 55, revenue: 16500 },
    { month: 'Jun', deals: 67, revenue: 21000 },
  ];

  const maxRevenue = Math.max(...chartData.map(d => d.revenue));

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Deal Statistics
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Monthly deals and revenue trends
          </p>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Deals</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
            <span className="text-sm text-gray-600 dark:text-gray-400">Revenue</span>
          </div>
        </div>
      </div>

      {/* Simple Bar Chart Representation */}
      <div className="space-y-4">
        {chartData.map((data, index) => (
          <div key={index} className="flex items-center gap-4">
            <div className="w-12 text-sm text-gray-600 dark:text-gray-400">
              {data.month}
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                <div 
                  className="bg-blue-500 h-2 rounded-full"
                  style={{ width: `${(data.deals / 70) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 w-12">
                {data.deals}
              </span>
            </div>
            <div className="flex-1 flex items-center gap-2">
              <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2 relative">
                <div 
                  className="bg-green-500 h-2 rounded-full"
                  style={{ width: `${(data.revenue / maxRevenue) * 100}%` }}
                ></div>
              </div>
              <span className="text-sm text-gray-600 dark:text-gray-400 w-16">
                ${data.revenue.toLocaleString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

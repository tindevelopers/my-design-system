import React from 'react';

/**
 * Sale Pie Chart Component
 * 
 * Displays sales data breakdown by category or source.
 * This is a simplified representation that can be enhanced
 * with actual chart libraries.
 */
export const SalePieChart: React.FC = () => {
  const saleData = [
    { label: 'Direct Sales', value: 45, amount: '$45,230', color: 'bg-blue-500' },
    { label: 'Online Sales', value: 30, amount: '$30,150', color: 'bg-green-500' },
    { label: 'Referrals', value: 15, amount: '$15,075', color: 'bg-purple-500' },
    { label: 'Partnerships', value: 10, amount: '$10,050', color: 'bg-orange-500' },
  ];

  const total = saleData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Sales by Source
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Revenue breakdown by sales channel
        </p>
      </div>

      <div className="flex items-center justify-between">
        {/* Simple Pie Chart Representation */}
        <div className="relative w-32 h-32">
          <div className="w-32 h-32 rounded-full bg-gray-200 dark:bg-gray-700 relative overflow-hidden">
            {saleData.map((item, index) => {
              const percentage = (item.value / total) * 100;
              const rotation = saleData.slice(0, index).reduce((sum, prevItem) => sum + (prevItem.value / total) * 360, 0);
              
              return (
                <div
                  key={index}
                  className={`absolute inset-0 ${item.color}`}
                  style={{
                    clipPath: `polygon(50% 50%, ${50 + 50 * Math.cos((rotation - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation - 90) * Math.PI / 180)}%, ${50 + 50 * Math.cos((rotation + percentage * 3.6 - 90) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation + percentage * 3.6 - 90) * Math.PI / 180)}%)`,
                    transform: `rotate(${rotation}deg)`,
                  }}
                />
              );
            })}
          </div>
        </div>

        {/* Legend */}
        <div className="flex-1 ml-6">
          <div className="space-y-3">
            {saleData.map((item, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-gray-600 dark:text-gray-400">
                    {item.label}
                  </span>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-gray-800 dark:text-white">
                    {item.amount}
                  </p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    {item.value}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between">
          <span className="text-sm text-gray-600 dark:text-gray-400">
            Total Sales
          </span>
          <span className="text-lg font-semibold text-gray-800 dark:text-white">
            $100,505
          </span>
        </div>
      </div>
    </div>
  );
};

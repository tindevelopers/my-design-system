import React from 'react';

interface MetricData {
  id: number;
  title: string;
  value: string;
  change: string;
  direction: 'up' | 'down' | 'neutral';
  comparisonText: string;
}

const mockData: MetricData[] = [
  {
    id: 1,
    title: "Active Deals",
    value: "$120,369",
    change: "+20%",
    direction: "up",
    comparisonText: "last month",
  },
  {
    id: 2,
    title: "Revenue Total",
    value: "$234,210",
    change: "+9.0%",
    direction: "up",
    comparisonText: "last month",
  },
  {
    id: 3,
    title: "Closed Deals",
    value: "874",
    change: "-4.5%",
    direction: "down",
    comparisonText: "last month",
  },
];

/**
 * CRM Metrics Component
 * 
 * Displays key performance indicators for the CRM dashboard.
 * Shows metrics like active deals, revenue, and closed deals with
 * percentage changes and comparison periods.
 */
export const CrmMetrics: React.FC = () => {
  const getBadgeColor = (direction: string) => {
    switch (direction) {
      case 'up':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'down':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      default:
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
    }
  };

  const getArrowIcon = (direction: string) => {
    if (direction === 'up') {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3.293 9.707a1 1 0 010-1.414l6-6a1 1 0 011.414 0l6 6a1 1 0 01-1.414 1.414L11 5.414V17a1 1 0 11-2 0V5.414L4.707 9.707a1 1 0 01-1.414 0z" clipRule="evenodd" />
        </svg>
      );
    } else if (direction === 'down') {
      return (
        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      );
    }
    return null;
  };

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6 xl:grid-cols-3">
      {mockData.map((item) => (
        <div
          key={item.id}
          className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6 shadow-sm"
        >
          <h4 className="text-2xl font-bold text-gray-800 dark:text-white/90">
            {item.value}
          </h4>

          <div className="flex items-end justify-between mt-4 sm:mt-5">
            <div>
              <p className="text-sm text-gray-700 dark:text-gray-400">
                {item.title}
              </p>
            </div>

            <div className="flex items-center gap-1">
              <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${getBadgeColor(item.direction)}`}>
                {getArrowIcon(item.direction)}
                {item.change}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {item.comparisonText}
              </span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

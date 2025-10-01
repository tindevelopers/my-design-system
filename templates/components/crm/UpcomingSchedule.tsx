import React from 'react';

interface ScheduleItem {
  id: string;
  time: string;
  title: string;
  description: string;
  type: 'meeting' | 'call' | 'demo' | 'follow-up';
  priority: 'high' | 'medium' | 'low';
}

/**
 * Upcoming Schedule Component
 * 
 * Displays upcoming meetings, calls, and tasks for the CRM team.
 * Shows schedule items with different types and priority levels.
 */
export const UpcomingSchedule: React.FC = () => {
  const scheduleData: ScheduleItem[] = [
    {
      id: '1',
      time: '10:00 AM',
      title: 'Client Demo - TechCorp',
      description: 'Product demonstration for potential enterprise client',
      type: 'demo',
      priority: 'high'
    },
    {
      id: '2',
      time: '2:30 PM',
      title: 'Follow-up Call - Sarah Johnson',
      description: 'Discuss proposal feedback and next steps',
      type: 'call',
      priority: 'medium'
    },
    {
      id: '3',
      time: '4:00 PM',
      title: 'Team Meeting',
      description: 'Weekly sales review and pipeline discussion',
      type: 'meeting',
      priority: 'medium'
    },
    {
      id: '4',
      time: '5:30 PM',
      title: 'Follow-up Email - ABC Corp',
      description: 'Send contract details and pricing information',
      type: 'follow-up',
      priority: 'low'
    },
  ];

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'meeting':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
        );
      case 'call':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
        );
      case 'demo':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
          </svg>
        );
      case 'follow-up':
        return (
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
        );
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'meeting':
        return 'text-blue-600 bg-blue-100 dark:bg-blue-900 dark:text-blue-300';
      case 'call':
        return 'text-green-600 bg-green-100 dark:bg-green-900 dark:text-green-300';
      case 'demo':
        return 'text-purple-600 bg-purple-100 dark:bg-purple-900 dark:text-purple-300';
      case 'follow-up':
        return 'text-orange-600 bg-orange-100 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'text-gray-600 bg-gray-100 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'low':
        return 'bg-green-500';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
          Upcoming Schedule
        </h3>
        <p className="text-sm text-gray-600 dark:text-gray-400">
          Today's meetings, calls, and tasks
        </p>
      </div>

      <div className="space-y-4">
        {scheduleData.map((item) => (
          <div key={item.id} className="flex items-start gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
            <div className="flex flex-col items-center gap-1">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${getTypeColor(item.type)}`}>
                {getTypeIcon(item.type)}
              </div>
              <div className={`w-2 h-2 rounded-full ${getPriorityColor(item.priority)}`}></div>
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between mb-1">
                <p className="text-sm font-medium text-gray-800 dark:text-white truncate">
                  {item.title}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400 flex-shrink-0">
                  {item.time}
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
        <button className="w-full text-center text-sm text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium">
          View Full Calendar
        </button>
      </div>
    </div>
  );
};

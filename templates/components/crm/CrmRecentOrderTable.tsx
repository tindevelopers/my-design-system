import React, { useState } from 'react';

interface TableRowData {
  id: string;
  user: {
    initials: string;
    name: string;
    email: string;
  };
  product: {
    name: string;
    price: string;
    purchaseDate: string;
  };
  status: {
    type: "Complete" | "Warning" | "Cancel" | "Pending";
  };
  actions: {
    delete: boolean;
  };
}

const tableRowData: TableRowData[] = [
  {
    id: "DE124321",
    user: {
      initials: "AB",
      name: "John Doe",
      email: "johndoe@gmail.com",
    },
    product: {
      name: "Software License",
      price: "$18,50.34",
      purchaseDate: "2024-06-15",
    },
    status: {
      type: "Complete",
    },
    actions: {
      delete: true,
    },
  },
  {
    id: "DE124322",
    user: {
      initials: "CD",
      name: "Jane Smith",
      email: "janesmith@gmail.com",
    },
    product: {
      name: "Cloud Hosting",
      price: "$12,99.00",
      purchaseDate: "2024-06-18",
    },
    status: {
      type: "Pending",
    },
    actions: {
      delete: true,
    },
  },
  {
    id: "DE124323",
    user: {
      initials: "EF",
      name: "Michael Brown",
      email: "michaelbrown@gmail.com",
    },
    product: {
      name: "Web Domain",
      price: "$9,50.00",
      purchaseDate: "2024-06-20",
    },
    status: {
      type: "Cancel",
    },
    actions: {
      delete: true,
    },
  },
  {
    id: "DE124324",
    user: {
      initials: "GH",
      name: "Alice Johnson",
      email: "alicejohnson@gmail.com",
    },
    product: {
      name: "SSL Certificate",
      price: "$2,30.45",
      purchaseDate: "2024-06-25",
    },
    status: {
      type: "Pending",
    },
    actions: {
      delete: true,
    },
  },
  {
    id: "DE124325",
    user: {
      initials: "IJ",
      name: "Robert Lee",
      email: "robertlee@gmail.com",
    },
    product: {
      name: "Premium Support",
      price: "$15,20.00",
      purchaseDate: "2024-06-30",
    },
    status: {
      type: "Complete",
    },
    actions: {
      delete: true,
    },
  },
];

/**
 * CRM Recent Orders Table Component
 * 
 * Displays a table of recent orders/deals with customer information,
 * product details, pricing, and status. Includes selection functionality
 * and action buttons.
 */
export const CrmRecentOrderTable: React.FC = () => {
  const [selectedRows, setSelectedRows] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedRows(tableRowData.map((row) => row.id));
    } else {
      setSelectedRows([]);
    }
  };

  const handleRowSelect = (id: string) => {
    setSelectedRows((prevSelected) =>
      prevSelected.includes(id)
        ? prevSelected.filter((rowId) => rowId !== id)
        : [...prevSelected, id]
    );
  };

  const getStatusBadgeColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Cancel':
        return 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300';
      case 'Warning':
        return 'bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300';
      default:
        return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  const getAvatarColor = (initials: string) => {
    const colors = [
      'bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500', 
      'bg-indigo-500', 'bg-yellow-500', 'bg-red-500', 'bg-teal-500'
    ];
    const index = initials.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white pt-4 dark:border-gray-800 dark:bg-white/[0.03] shadow-sm">
      <div className="flex flex-col gap-4 px-6 mb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
            Recent Orders
          </h3>
        </div>
        <div className="flex items-center gap-3">
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            <svg
              className="stroke-current fill-white dark:fill-gray-800"
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2.29004 5.90393H17.7067"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M17.7075 14.0961H2.29085"
                stroke=""
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12.0826 3.33331C13.5024 3.33331 14.6534 4.48431 14.6534 5.90414C14.6534 7.32398 13.5024 8.47498 12.0826 8.47498C10.6627 8.47498 9.51172 7.32398 9.51172 5.90415C9.51172 4.48432 10.6627 3.33331 12.0826 3.33331Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
              <path
                d="M7.91745 11.525C6.49762 11.525 5.34662 12.676 5.34662 14.0959C5.34661 15.5157 6.49762 16.6667 7.91745 16.6667C9.33728 16.6667 10.4883 15.5157 10.4883 14.0959C10.4883 12.676 9.33728 11.525 7.91745 11.525Z"
                fill=""
                stroke=""
                strokeWidth="1.5"
              />
            </svg>
            Filter
          </button>
          <button className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 hover:text-gray-800 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-white/[0.03] dark:hover:text-gray-200">
            See all
          </button>
        </div>
      </div>

      <div className="max-w-full overflow-x-auto">
        <div className="min-w-[640px]">
          <table className="w-full">
            <thead className="px-6 py-3 border-t border-gray-100 border-y bg-gray-50 dark:border-gray-800 dark:bg-gray-900">
              <tr>
                <th className="px-4 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  <div className="flex items-center gap-3">
                    <div>
                      <input
                        type="checkbox"
                        checked={selectAll}
                        onChange={handleSelectAll}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </div>
                    <div>
                      <span className="font-medium text-gray-500 text-xs dark:text-gray-400">
                        Deal ID
                      </span>
                    </div>
                  </div>
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Customer
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Product/Service
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Deal Value
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Close Date
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Status
                </th>
                <th className="px-6 py-3 font-medium text-gray-500 sm:px-6 text-xs dark:text-gray-400 text-start">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tableRowData.map((row: TableRowData) => (
                <tr key={row.id} className="border-b border-gray-100 dark:border-gray-800">
                  <td className="px-4 sm:px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div>
                        <input
                          type="checkbox"
                          checked={selectedRows.includes(row.id)}
                          onChange={() => handleRowSelect(row.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                      </div>
                      <div>
                        <span className="block font-medium text-gray-700 text-sm dark:text-gray-400">
                          {row.id}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-medium ${getAvatarColor(row.user.initials)}`}>
                        {row.user.initials}
                      </div>
                      <div>
                        <span className="mb-0.5 block text-sm font-medium text-gray-700 dark:text-gray-400">
                          {row.user.name}
                        </span>
                        <span className="text-gray-500 text-sm dark:text-gray-400">
                          {row.user.email}
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    <p className="text-gray-700 text-sm dark:text-gray-400">
                      {row.product.name}
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    <p className="text-gray-700 text-sm dark:text-gray-400">
                      {row.product.price}
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    <p className="text-gray-700 text-sm dark:text-gray-400">
                      {row.product.purchaseDate}
                    </p>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusBadgeColor(row.status.type)}`}>
                      {row.status.type}
                    </span>
                  </td>
                  <td className="px-4 sm:px-6 py-3.5">
                    {row.actions.delete && (
                      <button className="text-gray-700 cursor-pointer hover:text-red-500 dark:text-gray-400 dark:hover:text-red-500">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

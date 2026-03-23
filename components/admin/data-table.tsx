"use client";

import { Trash2, Eye } from "lucide-react";

export interface TableColumn<T> {
  key: keyof T;
  label: string;
  render?: (value: any, item: T) => React.ReactNode;
}

interface DataTableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  onDelete?: (id: any) => void;
  onView?: (id: any) => void;
  isLoading?: boolean;
  emptyMessage?: string;
}

export function DataTable<T extends { id: string }>({
  columns,
  data,
  onDelete,
  onView,
  isLoading = false,
  emptyMessage = "No data available"
}: DataTableProps<T>) {
  if (isLoading) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <div className="inline-block animate-spin">
          <div className="w-8 h-8 border-4 border-gray-200 border-t-black rounded-full" />
        </div>
        <p className="mt-4 text-gray-600">Loading...</p>
      </div>
    );
  }

  if (!data || data.length === 0) {
    return (
      <div className="bg-white rounded-lg border border-gray-200 p-8 text-center">
        <p className="text-gray-500">{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              {columns.map((column) => (
                <th
                  key={String(column.key)}
                  className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider"
                >
                  {column.label}
                </th>
              ))}
              {(onDelete || onView) && (
                <th className="px-6 py-3 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                  Actions
                </th>
              )}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {data.map((item, index) => (
              <tr key={item.id} className="hover:bg-gray-50 transition">
                {columns.map((column) => (
                  <td
                    key={String(column.key)}
                    className="px-6 py-4 text-sm text-gray-900"
                  >
                    {column.render
                      ? column.render(item[column.key], item)
                      : String(item[column.key]) || "-"}
                  </td>
                ))}
                {(onDelete || onView) && (
                  <td className="px-6 py-4 text-sm">
                    <div className="flex items-center gap-2">
                      {onView && (
                        <button
                          onClick={() => onView(item.id)}
                          className="p-2 hover:bg-gray-200 rounded-lg transition"
                          title="View"
                        >
                          <Eye size={16} className="text-gray-600" />
                        </button>
                      )}
                      {onDelete && (
                        <button
                          onClick={() => onDelete(item.id)}
                          className="p-2 hover:bg-red-100 rounded-lg transition"
                          title="Delete"
                        >
                          <Trash2 size={16} className="text-red-600" />
                        </button>
                      )}
                    </div>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';
import { generateYAxis } from '@/app/lib/utils';
import { CalendarIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default async function RevenueChart({ revenue }) {
  const chartHeight = 350;

  // Generate Y-axis labels and determine the top value for scaling
  const { yAxisLabels, topLabel } = generateYAxis(revenue);

  // Return early if there's no revenue data
  if (!revenue || revenue.length === 0) {
    return <p className="mt-4 text-gray-400">No data available.</p>;
  }

  return (
    <div className="w-full md:col-span-4">
      {/* Title */}
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Recent Revenue
      </h2>

      {/* Chart container */}
      <div className="rounded-xl bg-gray-50 p-4">
        <div className="flex">
          {/* Y-axis labels */}
          <div
            className="flex flex-col justify-between text-sm text-gray-400"
            style={{ height: `${chartHeight}px`, width: '50px' }}
          >
            {yAxisLabels.map((label) => (
              <p key={label}>{label}</p>
            ))}
          </div>

          {/* Bars representing revenue */}
          <div className="flex flex-grow justify-between items-end space-x-2">
            {revenue.map((month, index) => (
              <div key={index} className="flex flex-col items-center flex-grow">
                <div
                  className="bg-blue-300 rounded-md"
                  style={{
                    height: `${(month.revenue / topLabel) * chartHeight}px`,
                    width: '100%', // Stretch the width dynamically
                  }}
                ></div>
                <p className="text-sm text-gray-400">
                  {month.month}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer with Calendar Icon */}
        <div className="flex items-center pb-2 pt-6">
          <CalendarIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500">Last 12 months</h3>
        </div>
      </div>
    </div>
  );
}

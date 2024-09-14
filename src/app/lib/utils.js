
// export const formatCurrency = (amount) => {
//   return (amount / 100).toLocaleString('en-US', {
//     style: 'currency',
//     currency: 'USD',
//   });
// };

// export const formatDateToLocal = (
//   dateStr,
//   locale = 'en-US',
// ) => {
//   const date = new Date(dateStr);
//   const options = {
//     day: 'numeric',
//     month: 'short',
//     year: 'numeric',
//   };
//   const formatter = new Intl.DateTimeFormat(locale, options);
//   return formatter.format(date);
// };

// export const generateYAxis = (revenue) => {
//   // Calculate what labels we need to display on the y-axis
//   // based on highest record and in 1000s
//   const yAxisLabels = [];
//   const highestRecord = Math.max(...revenue.map((month) => month.revenue));
//   const topLabel = Math.ceil(highestRecord / 1000) * 1000;

//   for (let i = topLabel; i >= 0; i -= 1000) {
//     yAxisLabels.push(`$${i / 1000}K`);
//   }

//   return { yAxisLabels, topLabel };
// };

// export const generatePagination = (currentPage, totalPages) => {
//   // If the total number of pages is 7 or less,
//   // display all pages without any ellipsis.
//   if (totalPages <= 7) {
//     return Array.from({ length: totalPages }, (_, i) => i + 1);
//   }

//   // If the current page is among the first 3 pages,
//   // show the first 3, an ellipsis, and the last 2 pages.
//   if (currentPage <= 3) {
//     return [1, 2, 3, '...', totalPages - 1, totalPages];
//   }

//   // If the current page is among the last 3 pages,
//   // show the first 2, an ellipsis, and the last 3 pages.
//   if (currentPage >= totalPages - 2) {
//     return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
//   }

//   // If the current page is somewhere in the middle,
//   // show the first page, an ellipsis, the current page and its neighbors,
//   // another ellipsis, and the last page.
//   return [
//     1,
//     '...',
//     currentPage - 1,
//     currentPage,
//     currentPage + 1,
//     '...',
//     totalPages,
//   ];
// };

// src/app/lib/utils.js

export const formatCurrency = (amount) => {
  return (amount / 100).toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const formatDateToLocal = (dateStr, locale = 'en-US') => {
  const date = new Date(dateStr);
  const options = {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  };
  const formatter = new Intl.DateTimeFormat(locale, options);
  return formatter.format(date);
};

export const generateYAxis = (revenue = []) => {
  // Check if revenue data exists and has values
  if (!revenue || revenue.length === 0) {
    console.warn('Revenue data is empty or undefined.');
    return { yAxisLabels: [], topLabel: 0 };  // Return empty labels if no data
  }

  // Calculate the highest revenue value
  const highestRecord = Math.max(...revenue.map((month) => month.revenue));
  const yAxisLabels = [];
  const topLabel = Math.ceil(highestRecord / 1000) * 1000;

  // Generate the y-axis labels
  for (let i = topLabel; i >= 0; i -= 1000) {
    yAxisLabels.push(`$${i / 1000}K`);
  }

  return { yAxisLabels, topLabel };
};

export const generatePagination = (currentPage, totalPages) => {
  if (totalPages <= 7) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  if (currentPage <= 3) {
    return [1, 2, 3, '...', totalPages - 1, totalPages];
  }

  if (currentPage >= totalPages - 2) {
    return [1, 2, '...', totalPages - 2, totalPages - 1, totalPages];
  }

  return [
    1,
    '...',
    currentPage - 1,
    currentPage,
    currentPage + 1,
    '...',
    totalPages,
  ];
};

// /** @type {import('tailwindcss').config} */

// const config = {
//   content: [
//     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
//     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
//   ],
//   theme: {
//     extend: {
//       gridTemplateColumns: {
//         13: 'repeat(13, minmax(0, 1fr))',
//       },
//       colors: {
//         blue: {
//           400: '#2589FE',
//           500: '#0070F3',
//           600: '#2F6FEB',
//         },
//       },
//     },
//     keyframes: {
//       shimmer: {
//         '100%': {
//           transform: 'translateX(100%)',
//         },
//       },
//     },
//   },
//   plugins: [require('@tailwindcss/forms')],
// };

// export default config;

// // import { Config } from 'tailwindcss';

// // const config: Config = {
// //   content: [
// //     './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
// //     './src/components/**/*.{js,ts,jsx,tsx,mdx}',
// //     './src/app/**/*.{js,ts,jsx,tsx,mdx}',
// //   ],
// //   theme: {
// //     extend: {
// //       gridTemplateColumns: {
// //         13: 'repeat(13, minmax(0, 1fr))',
// //       },
// //       colors: {
// //         blue: {
// //           400: '#2589FE',
// //           500: '#0070F3',
// //           600: '#276FEB',
// //         },
// //       },
// //       keyframes: {
// //         shimmer: {
// //           '100%': {
// //             transform: 'translateX(100%)',
// //           },
// //         },
// //       },
// //     },
// //   },
// //   plugins: [require('@tailwindcss/forms')],
// // };

// // export default config;

import forms from '@tailwindcss/forms';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: {
          400: '#2589FE',
          500: '#0070F3',
          600: '#276FEB',
        },
      },
      keyframes: {
        shimmer: {
          '100%': {
            transform: 'translateX(100%)',
          },
        },
      },
    },
  },
  plugins: [forms], // Use the imported plugin here
};

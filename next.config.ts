import type { NextConfig } from "next";



const nextConfig = {
  async rewrites() {
    return [
      {
          source: '/stores',
          destination: 'https://devapi.tailorspace.store',
      },
    ];
  }
};

export default nextConfig;

// const nextConfig: NextConfig = {
  /* config options here */
//  module.exports = {
//     async rewrites() {
//         return [
//           {
//             source: '/stores/',
//             destination: 'https://devapi.tailorspace.store',
//           },
//         ]
//       },
//   };
// };

// export default nextConfig;

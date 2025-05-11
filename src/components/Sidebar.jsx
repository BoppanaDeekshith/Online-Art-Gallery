// import { Link, useLocation } from 'react-router-dom';
// import { useState } from 'react';

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(true);
//   const location = useLocation();

//   const categories = [
//     { name: 'Paintings', path: '/gallery/paintings' },
//     { name: 'Sculptures', path: '/gallery/sculptures' },
//     { name: 'Photography', path: '/gallery/photography' },
//     { name: 'Digital Art', path: '/gallery/digital-art' },
//     { name: 'Mixed Media', path: '/gallery/mixed-media' },
//   ];

//   return (
//     <div className={`fixed left-0 top-0 h-full bg-gray-900 text-white transition-all duration-300 ${isOpen ? 'w-64' : 'w-20'} z-10`}>
//       <div className="p-4">
//         <button
//           onClick={() => setIsOpen(!isOpen)}
//           className="w-full flex items-center justify-between mb-6"
//         >
//           <span className={`font-bold text-xl ${!isOpen && 'hidden'}`}>Art Gallery</span>
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               strokeWidth={2}
//               d={isOpen ? "M11 19l-7-7 7-7m8 14l-7-7 7-7" : "M13 5l7 7-7 7M5 5l7 7-7 7"}
//             />
//           </svg>
//         </button>

//         <nav className="space-y-2">
//           <Link
//             to="/"
//             className={`flex items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${
//               location.pathname === '/' ? 'bg-gray-800' : ''
//             }`}
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="h-6 w-6"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
//               />
//             </svg>
//             <span className={`ml-3 ${!isOpen && 'hidden'}`}>Home</span>
//           </Link>

//           <div className="pt-4">
//             <h3 className={`text-sm font-semibold text-gray-400 uppercase ${!isOpen && 'hidden'}`}>
//               Categories
//             </h3>
//             <div className="mt-2 space-y-1">
//               {categories.map((category) => (
//                 <Link
//                   key={category.path}
//                   to={category.path}
//                   className={`flex items-center p-2 rounded-lg hover:bg-gray-800 transition-colors ${
//                     location.pathname === category.path ? 'bg-gray-800' : ''
//                   }`}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
//                     />
//                   </svg>
//                   <span className={`ml-3 ${!isOpen && 'hidden'}`}>{category.name}</span>
//                 </Link>
//               ))}
//             </div>
//           </div>
//         </nav>
//       </div>
//     </div>
//   );
// };

// export default Sidebar; 
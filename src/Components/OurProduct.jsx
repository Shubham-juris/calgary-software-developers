// import React, { useEffect, useState } from "react";
// import {
//   FaProjectDiagram,
//   FaBook,
//   FaWallet,
//   FaRocket,
//   FaBed,
//   FaUtensils,
//   FaShoppingCart,
//   FaStore,
//   FaHospital,
//   FaPills,
//   FaUsers,
//   FaCogs,
// } from "react-icons/fa";

// const categories = [
//   {
//     name: "Business Solutions",
//     products: [
//       {
//         title: "SmartERP",
//         description: "Complete ERP solution for startups and SMEs",
//         icon: <FaCogs className="text-3xl text-white" />,
//       },
//       {
//         title: "BizPlanner",
//         description: "Project management & planning SaaS",
//         icon: <FaProjectDiagram className="text-3xl text-white" />,
//       },
//       {
//         title: "CRM Pro",
//         description: "Client Relationship Management tool",
//         icon: <FaUsers className="text-3xl text-white" />,
//       },
//       {
//         title: "BookSmart",
//         description: "Accounting & bookkeeping software",
//         icon: <FaBook className="text-3xl text-white" />,
//       },
//     ],
//   },
//   {
//     name: "Blockchain",
//     products: [
//       {
//         title: "ChainTrade",
//         description: "Crypto trading platform with wallet integration",
//         icon: <FaWallet className="text-3xl text-white" />,
//       },
//       {
//         title: "TokenLaunch",
//         description: "ICO/Token launch platform with smart contract support",
//         icon: <FaRocket className="text-3xl text-white" />,
//       },
//     ],
//   },
//   {
//     name: "Hospitality",
//     products: [
//       {
//         title: "StayWise",
//         description: "Hotel & vacation rental booking system",
//         icon: <FaBed className="text-3xl text-white" />,
//       },
//       {
//         title: "DineRight",
//         description: "Restaurant POS & management platform",
//         icon: <FaUtensils className="text-3xl text-white" />,
//       },
//     ],
//   },
//   {
//     name: "E-Commerce",
//     products: [
//       {
//         title: "ShopSwift",
//         description: "Multi-vendor eCommerce platform",
//         icon: <FaShoppingCart className="text-3xl text-white" />,
//       },
//       {
//         title: "RetailEdge",
//         description: "POS & inventory for small retailers",
//         icon: <FaStore className="text-3xl text-white" />,
//       },
//     ],
//   },
//   {
//     name: "Healthcare",
//     products: [
//       {
//         title: "MediTrack",
//         description: "Clinic & patient management software",
//         icon: <FaHospital className="text-3xl text-white" />,
//       },
//       {
//         title: "PharmaFlow",
//         description: "Pharmacy inventory and billing system",
//         icon: <FaPills className="text-3xl text-white" />,
//       },
//     ],
//   },
// ];

// function OurProduct() {
//   const [content, setContent] = useState([]);

//   useEffect(() => {
//     setContent(categories[0].products);
//   }, []);

//   const renderCards = (items) =>
//     items.map((item, idx) => (
//       <div
//         key={idx}
//         className="h-28 w-96 rounded-xl border shadow-md bg-gradient-to-r from-indigo-700 to-teal-500 text-white"
//       >
//         <div className="flex h-full items-center p-3">
//           <div className="h-20 w-20 flex justify-center items-center">
//             {item.icon}
//           </div>
//           <div className="ml-4 flex flex-col justify-center">
//             <p className="font-bold text-lg">{item.title}</p>
//             <p className="text-sm">{item.description}</p>
//           </div>
//         </div>
//       </div>
//     ));

//   return (
//     <div className="my-16 px-4">
//       <div className="text-center mb-8">
//         <h2 className="text-4xl font-extrabold text-indigo-900">Our Products</h2>
//         <p className="text-lg mt-2 text-gray-600">
//           Innovative solutions crafted by Calgary’s top software engineers to help your business grow.
//         </p>
//       </div>

//       <div className="flex justify-center flex-wrap gap-4 mb-8">
//         {categories.map((cat, idx) => (
//           <button
//             key={idx}
//             onClick={() => setContent(cat.products)}
//             className="bg-indigo-900 hover:bg-indigo-700 text-white px-6 py-2 rounded-xl shadow-md"
//           >
//             {cat.name}
//           </button>
//         ))}
//       </div>

//       <div className="flex flex-wrap justify-center gap-4">
//         {renderCards(content)}
//       </div>
//     </div>
//   );
// }

// export default OurProduct;

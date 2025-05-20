// // src/components/guest/Testimoni.jsx
// import React from "react";
// import testimonials from "../../data/guest/testimoni.json";

// const Testimoni = () => {
//   return (
//     <section className="py-16 bg-[#f9f9f9]">
//       <div className="container mx-auto px-6">
//         <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
//           Testimoni Pengguna
//         </h2>
//         <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//           {testimonials.map((item, index) => (
//             <div key={index} className="bg-white p-6 rounded-lg shadow">
//               <div className="flex items-center gap-4 mb-4">
//                 <img
//                   src={item.avatar}
//                   alt={item.name}
//                   className="w-12 h-12 rounded-full object-cover"
//                 />
//                 <div>
//                   <h4 className="font-semibold text-gray-800">{item.name}</h4>
//                 </div>
//               </div>
//               <p className="text-gray-600">{item.review}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Testimoni;

import React from "react";
import testimonials from "../../data/guest/testimoni.json";
import { FaStar } from "react-icons/fa";

const Testimoni = () => {
  return (
    <section className="py-20 bg-[#f9f9f9]">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Apa Kata Pengunjung?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              {/* Avatar dan Nama */}
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-14 h-14 rounded-full object-cover border border-gray-300"
                />
                <div>
                  <h4 className="font-semibold text-gray-800 text-lg">{item.name}</h4>
                  {/* Bintang rating tetap 5 untuk sekarang */}
                  <div className="flex text-yellow-400 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} />
                    ))}
                  </div>
                </div>
              </div>

              {/* Ulasan */}
              <p className="text-gray-600 italic">“{item.review}”</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimoni;

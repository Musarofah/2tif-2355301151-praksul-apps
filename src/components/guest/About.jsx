import React from "react";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        {/* Kontainer gambar dan deskripsi */}
        <div className="flex flex-col lg:flex-row items-center gap-10 bg-white shadow-md rounded-xl overflow-hidden">
          {/* Gambar */}
          <div className="w-full lg:w-1/2">
            <img
              src="src/assets/about2.jpg"
              alt="Room"
              className="w-250 h-150 object-cover"
            />
          </div>

          {/* Konten teks */}
          <div className="w-full lg:w-1/2 p-6 lg:p-10">
            <p className="text-red-500 font-semibold uppercase mb-2">
              About Us
            </p>
            <h2 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-4">
              Explore All Corners Of The World With Us
            </h2>
            <p className="text-gray-600 mb-6">
              There are many variations of passages of Lorem Ipsum available,
              but the majority have suffered alteration in some form, by
              injected humour, or randomised words which don't look even
              slightly believable. If you are going to use a passage of Lorem
              Ipsum, you need to be sure.
            </p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md transition">
              Discover More
            </button>
          </div>
        </div>

        {/* Statistik */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center mt-16 border-t pt-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">302+</h3>
            <p className="text-gray-600 mt-2">Room & Suites</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">25</h3>
            <p className="text-gray-600 mt-2">Restaurant</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">510+</h3>
            <p className="text-gray-600 mt-2">Exceptional Food</p>
          </div>
          <div>
            <h3 className="text-2xl font-bold text-gray-800">65</h3>
            <p className="text-gray-600 mt-2">Destination</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

import React from "react";
import destinations from "../../data/guest/popularDestinations.json"; // Pastikan path sesuai

const PopularDestinations = () => {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-6">
                <h2 className="text-2xl font-semibold text-gray-800">Our Most Popular Destination</h2>
                <p className="text-gray-600 text-sm mt-2">
                    It is a long established fact that a reader will be distracted by the readable content of a page.
                </p><br></br>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {destinations.map((item) => (
                        <div key={item.id} className="bg-white shadow rounded-lg overflow-hidden">
                            <img
                                src={item.image}
                                alt={item.name}
                                className="w-full h-90 object-cover"
                            />
                            <div className="p-4">
                                <span className="text-sm text-gray-500">{item.location}</span>
                                <h3 className="text-lg font-semibold text-gray-800 mt-1">{item.name}</h3>
                                <div className="flex items-center justify-between mt-3">
                                    <span className="text-red-500 font-bold">{item.price}</span>
                                    <div className="text-sm text-gray-600">
                                        ⭐ {item.rating} ({item.reviewCount})
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PopularDestinations;

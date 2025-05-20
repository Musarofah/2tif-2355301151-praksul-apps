import React, { useEffect, useState } from "react";
import produkData from "../../data/guest/produk.json";
import { FiEye } from "react-icons/fi";

const TopProduk = () => {
    const [produk, setProduk] = useState([]);

    useEffect(() => {
        setProduk(produkData);
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Room Unggulan</h2>
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                    {produk.map((item) => (
                        <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                            <img
                                src={item.gambar}
                                alt={item.nama}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-semibold text-gray-700">{item.nama}</h3>
                                <p className="text-black font-bold mt-2">Rp {item.harga.toLocaleString()}</p>

                                <div className="flex items-center text-sm text-gray-500 mt-2">
                                    <FiEye className="mr-1" />
                                    <span>{item.review} Review</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TopProduk;

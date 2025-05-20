import { useState } from "react";
import produkData from "../Produk.json";


export default function ProdukListSearchFilter() {
    // const [searchTerm, setSearchTerm] = useState("");
    // const [selectedTag, setSelectedTag] = useState("");
    const [dataForm, setDataForm] = useState({
        searchTerm: "",
        selectedTag: "",
        /*Tambah state lain beserta default value*/
    });

    // Handle perubahan nilai input form
    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };


    const allTags = [
        ...new Set(produkData.flatMap((produk) => produk.tags)),
    ];

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredProduks = produkData.filter((produk) => {
        const matchesSearch =
        produk.name
                .toLowerCase()
                .includes(_searchTerm) ||
                produk.description
                .toLowerCase()
                .includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? produk.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });


    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search produk..."
                className="w-full p-2 border border-gray-300 rounded mb-4"
                // onChange={(e) => setSearchTerm(e.target.value)}
                onChange={handleChange}
            />

            <select
                name="selectedTag"
                value={dataForm.selectedTag}
                className="w-full p-2 border border-gray-300 rounded mb-4"
                // onChange={(e) => setSelectedTag(e.target.value)}
                onChange={handleChange}
            >
                <option value="">All Tags</option>
                {allTags.map((tag, index) => (
                    <option key={index} value={tag}>
                        {tag}
                    </option>
                ))}
            </select>
            <div className="grid grid-cols-2 md:grid-cols-4">

                {filteredProduks.map((produk) => (
                    <div key={produk.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{produk.title}</h2>
                        <p className="text-gray-600">{produk.price}</p>

                        {produk.tags.map((tag,index) => (
                            <span key={index} className="bg-gray-200 text-gray-700 px-2 py-1 text-xs rounded-full mr-2">
                                {tag}
                            </span>

                        ))}

                    </div>
                ))}

            </div>

        </div>
    )
}





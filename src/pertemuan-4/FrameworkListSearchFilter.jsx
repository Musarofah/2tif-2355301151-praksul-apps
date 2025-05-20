import { useState } from "react";
import frameworkData from "./framework.json";


export default function FrameworkListSearchFilter() {
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
        ...new Set(frameworkData.flatMap((framework) => framework.tags)),
    ];

    const _searchTerm = dataForm.searchTerm.toLowerCase();
    const filteredFrameworks = frameworkData.filter((framework) => {
        const matchesSearch =
            framework.name
                .toLowerCase()
                .includes(_searchTerm) ||
            framework.description
                .toLowerCase()
                .includes(_searchTerm);

        const matchesTag = dataForm.selectedTag ? framework.tags.includes(dataForm.selectedTag) : true;

        return matchesSearch && matchesTag;
    });


    return (
        <div className="p-8">
            <input
                type="text"
                name="searchTerm"
                value={dataForm.searchTerm}
                placeholder="Search framework..."
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

                {filteredFrameworks.map((item) => (
                    <div key={item.id} className="border p-4 mb-4 rounded-lg shadow-md bg-white">
                        <h2 className="text-lg font-bold text-gray-800">{item.name}</h2>
                        <p className="text-gray-600">{item.description}</p>
                        <p className="text-blue-400 hover:text-blue-700">{item.details.developer}</p>

                        {item.tags.map((tag, index) => (
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





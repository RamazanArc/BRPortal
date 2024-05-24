import React, { useState } from "react";

interface AdvancedSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (field: string, term: string) => void;
}

const AdvancedSearchModal: React.FC<AdvancedSearchModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [searchField, setSearchField] = useState("title");
  const [searchTerm, setSearchTerm] = useState("");

  const handleFieldChange = (event: any) => {
    setSearchField(event.target.value);
  };

  const handleTermChange = (event: any) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = () => {
    onSubmit(searchField, searchTerm);
    onClose(); // Close the modal after submission
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Gelişmiş Arama</h2>
        <div className="mb-4">
          <label
            htmlFor="searchField"
            className="block text-sm font-medium text-gray-700"
          >
            Arama Alanı
          </label>
          <select
            id="searchField"
            value={searchField}
            onChange={handleFieldChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          >
            <option value="title">Ürün Adı</option>
            <option value="description">Açıklama</option>
            <option value="price">Fiyat</option>
            <option value="category">Kategori</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            htmlFor="searchTerm"
            className="block text-sm font-medium text-gray-700"
          >
            Arama Terimi
          </label>
          <input
            type="text"
            id="searchTerm"
            value={searchTerm}
            onChange={handleTermChange}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm"
          />
        </div>
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="mr-4 text-gray-700 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            İptal
          </button>
          <button
            onClick={handleSubmit}
            className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Ara
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedSearchModal;

"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../Components/Sidebar";
import Dialog from "../Components/Dialog";
import Product from "../Models/Product";
import AdvancedSearchModal from "../Components/AdvancedSearchModal";

const Dashboard = () => {
  const [products, setProducts] = useState<any[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: string;
  } | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
  const [isAdvancedSearchOpen, setIsAdvancedSearchOpen] = useState(false);
  const [advancedSearchResults, setAdvancedSearchResults] = useState<any[]>([]);
  const itemsPerPage = 8;
  const productObject = new Product();

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const [response] = await productObject.getProducts();
        setProducts(response.data.products);
        setAdvancedSearchResults(response.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Handle search input change
  const handleSearch = (event: any) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to first page on search
  };

  // Sort products
  const sortedProducts = [...advancedSearchResults];
  if (sortConfig !== null) {
    sortedProducts.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === "ascending" ? 1 : -1;
      }
      return 0;
    });
  }

  // Filter products based on the search term
  const basicFilteredProducts = sortedProducts.filter(
    (product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.price.toString().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Calculate total pages
  const totalPages = Math.ceil(basicFilteredProducts.length / itemsPerPage);

  // Get current page products
  const currentProducts = basicFilteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  // Handle sorting
  const handleSort = (key: string) => {
    let direction = "ascending";
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === "ascending"
    ) {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  const handleOpenDialog = (product: any) => {
    setSelectedProduct(product);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedProduct(null);
  };

  const getSortIcon = (key: string) => {
    if (sortConfig?.key === key) {
      return sortConfig.direction === "ascending" ? "↑" : "↓";
    }
    return "↕";
  };

  const handleAdvancedSearch = () => {
    setIsAdvancedSearchOpen(true);
  };

  const handleAdvancedSearchClose = () => {
    setIsAdvancedSearchOpen(false);
  };

  const handleAdvancedSearchSubmit = (field: string, term: string) => {
    const filteredResults = products.filter((product) =>
      product[field].toString().toLowerCase().includes(term.toLowerCase())
    );
    setAdvancedSearchResults(filteredResults);
    setCurrentPage(1); // Reset to first page
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="relative overflow-x-auto w-full p-5 ">
        <h1 className="font-bold text-xl mt-5 mb-5 ml-5">
          E-Ticaret Portal Ürünleri
        </h1>
        <div className="relative flex items-center mb-5">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50"
              placeholder="Ürün Ara"
              required
              value={searchTerm}
              onChange={handleSearch}
            />
          </div>
          <button
            onClick={handleAdvancedSearch}
            className="ml-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Gelişmiş Arama
          </button>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 mt-10">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Ürün Fotoğrafı
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort("title")}
              >
                Ürün Adı {getSortIcon("title")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort("description")}
              >
                Açıklama {getSortIcon("description")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort("price")}
              >
                Fiyat {getSortIcon("price")}
              </th>
              <th
                scope="col"
                className="px-6 py-3 cursor-pointer"
                onClick={() => handleSort("category")}
              >
                Kategori {getSortIcon("category")}
              </th>
              <th scope="col" className="px-6 py-3">
                #
              </th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map((product) => (
              <tr key={product.id} className="odd:bg-white even:bg-gray-100">
                <td className="px-6 py-4">
                  <div className="flex items-center">
                    <img
                      src={product.thumbnail}
                      alt={product.category}
                      className="w-10 h-10 mr-2"
                    />
                  </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                  {product.title}
                </td>
                <td className="px-6 py-4">{product.description}</td>
                <td className="px-6 py-4">${product.price}</td>
                <td className="px-6 py-4">{product.category}</td>
                <td className="px-6 py-4">
                  <button
                    onClick={() => handleOpenDialog(product)}
                    className="font-medium text-green-600 hover:underline"
                  >
                    Detay
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${
              currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Önceki Sayfa
          </button>
          <span>
            Sayfa {currentPage} / {totalPages}
          </span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 ${
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }`}
          >
            Sonraki Sayfa
          </button>
        </div>
      </div>
      {isDialogOpen && (
        <Dialog product={selectedProduct} onClose={handleCloseDialog} />
      )}
      <AdvancedSearchModal
        isOpen={isAdvancedSearchOpen}
        onClose={handleAdvancedSearchClose}
        onSubmit={handleAdvancedSearchSubmit}
      />
    </div>
  );
};

export default Dashboard;

import React, { useState } from "react";

const Dialog = ({
  product,
  onClose,
}: {
  product: any;
  onClose: () => void;
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!product) return null;

  const handlePrevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleNextImage = () => {
    if (currentImageIndex < product.images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="bg-white rounded-lg p-5 z-50">
        <h2 className="text-xl font-bold mb-4">{product.title}</h2>
        <div className="relative">
          <img
            src={product.images[currentImageIndex]}
            alt={product.title}
            className="w-80 h-80"
          />
          {currentImageIndex > 0 && (
            <button
              onClick={handlePrevImage}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              {"<"}
            </button>
          )}
          {currentImageIndex < product.images.length - 1 && (
            <button
              onClick={handleNextImage}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-200 rounded-full p-2"
            >
              {">"}
            </button>
          )}
        </div>
        <button
          onClick={onClose}
          className="mt-4 text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
        >
          Kapat
        </button>
      </div>
    </div>
  );
};

export default Dialog;

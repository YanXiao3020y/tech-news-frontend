import React from 'react';

interface ProductCardProps {
  author: string;
  productName: string;
  releaseDate: string;
  description: string; // Hover 时显示的详细信息
  link?: string; // 跳转链接
}

const ProductCard: React.FC<ProductCardProps> = ({
  author,
  productName,
  releaseDate,
  description,
  link = "#",
}) => {
  return (
    <div className="relative w-80 h-48 border rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <div className="absolute inset-0 p-8 bg-white transition-opacity duration-300 ease-in-out hover:opacity-0">
        <h2 className="text-2xl font-semibold mb-2.5">{productName.length > 16 ? productName.slice(0,13) + '...' : productName}</h2>
        <p className="text-sm text-gray-500">Author: {author}</p>
        <p className="text-sm text-gray-500">Release: {releaseDate}</p>
      </div>

      <div className="absolute inset-0 p-8 bg-blue-50 opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out">
        <h2 className="text-2xl font-semibold mb-2">{productName.length > 16 ? productName.slice(0,13) + '...' : productName}</h2>
        <p className="text-sm text-wrap break-words mb-2 leading-relaxed">{description.replace(/,/g, '\n')}</p>
        <a
          href={link}
          className="inline-block px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors"
          target="_blank"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default ProductCard;

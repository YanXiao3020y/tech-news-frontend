import React from "react";

interface ProductCardProps {
  author: string;
  productName: string;
  releaseDate: string;
  description: string;
  link: string;
  icon: string;
  tag: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  author,
  productName,
  releaseDate,
  description,
  link = "#",
  icon,
  tag,
}) => {
  return (
    <div className="group relative h-36 w-[384px] transform overflow-hidden rounded-lg shadow-lg shadow-gray-200 transition-transform hover:scale-105 sm:h-44 sm:w-72 md:h-48 md:w-80">
      <div className="absolute inset-0 bg-white p-6 transition-opacity duration-300 ease-in-out hover:opacity-0">
        <img
          src={icon}
          width="30"
          height="30"
          className="transform rounded-md transition-all duration-300 group-hover:-translate-y-10 group-hover:opacity-0"
          onError={(e) => {
            (e.target as HTMLImageElement).src = "/placeholder.png";
          }}
        />
        <h2 className="absolute left-6 top-16 mb-8 max-w-[80%] transform overflow-hidden overflow-ellipsis text-nowrap font-sour text-xl font-semibold transition-all duration-300 group-hover:-translate-y-10 md:text-2xl">
          {productName}
        </h2>
        <p className="absolute left-6 top-24 transform font-funnel text-xs text-gray-500 transition-all duration-300 group-hover:-translate-y-10">
          Release: {releaseDate}
        </p>
        <p className="absolute left-6 top-[120px] w-[85%] transform font-funnel text-base text-gray-800 transition-all duration-300 group-hover:-translate-y-16">
          {tag}
        </p>
      </div>

      <div className="absolute inset-0 overflow-auto bg-blue-50 p-6 opacity-0 transition-opacity duration-300 hover:opacity-100">
        <h2 className="absolute left-6 top-16 mb-8 max-w-[80%] transform overflow-hidden overflow-ellipsis text-nowrap font-sour text-xl font-semibold transition-all duration-300 group-hover:-translate-y-10 md:text-2xl">
          {productName}
        </h2>
        <p className="absolute top-24 transform font-funnel text-xs text-gray-500 transition-all duration-300 group-hover:-translate-y-10">
          Author: {author}
        </p>
        <p className="relative mt-[120px] transform font-funnel text-base text-gray-800 transition-all duration-300 group-hover:-translate-y-16">
          {description}
          <a
            href={link}
            className="absolute -bottom-16 left-0 inline-block rounded-lg bg-blue-600 px-4 py-2 text-center font-funnel text-white transition-colors duration-200 hover:bg-blue-700"
            target="_blank"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  );
};

export default ProductCard;

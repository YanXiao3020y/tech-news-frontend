import React from 'react'

interface ProductCardProps {
  author: string
  productName: string
  releaseDate: string
  description: string
  link: string
  icon: string
  tag: string
}

const ProductCard: React.FC<ProductCardProps> = ({
  author,
  productName,
  releaseDate,
  description,
  link = '#',
  icon,
  tag
}) => {
  return (
    <div className="group relative w-[384px] h-36 md:w-80 md:h-48 sm:w-80 sm:h-44 border rounded-lg overflow-hidden shadow-lg shadow-gray-200 transition-transform transform hover:scale-105">
      <div className="absolute inset-0 p-6 bg-white transition-opacity duration-300 ease-in-out hover:opacity-0">
        <img
          src={icon}
          width="30"
          height="30"
          className="transition-all rounded-md duration-300 transform group-hover:-translate-y-10 group-hover:opacity-0"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = '/placeholder.png'
          }}
        />
        <h2 className="absolute max-w-[80%] left-6 top-16 transition-all duration-300 transform group-hover:-translate-y-10 font-sour md:text-2xl text-xl font-semibold mb-8 text-nowrap overflow-ellipsis overflow-hidden">
          {productName}
        </h2>
        <p className="transition-all duration-300 transform group-hover:-translate-y-10 absolute top-24 left-6 text-xs font-funnel text-gray-500">
          Release: {releaseDate}
        </p>
        <p className="transition-all duration-300 transform group-hover:-translate-y-16 absolute top-[120px] text-base font-funnel text-gray-800">
          {tag}
        </p>
      </div>

      <div className="absolute inset-0 p-6 bg-blue-50 opacity-0 hover:opacity-100 overflow-auto transition-opacity duration-300">
        <h2 className="absolute max-w-[80%] left-6 top-16 transition-all duration-300 transform group-hover:-translate-y-10 font-sour md:text-2xl text-xl font-semibold mb-8 text-nowrap overflow-ellipsis overflow-hidden">
          {productName}
        </h2>
        <p className="transition-all duration-300 transform group-hover:-translate-y-10 absolute top-24 text-xs font-funnel text-gray-500">
          Author: {author}
        </p>
        <p className="relative transition-all duration-300 transform group-hover:-translate-y-16 mt-[120px] text-base font-funnel text-gray-800">
          {description}
          <a
            href={link}
            className="inline-block absolute -bottom-16 left-0 font-funnel text-center px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            target="_blank"
          >
            Read More
          </a>
        </p>
      </div>
    </div>
  )
}

export default ProductCard

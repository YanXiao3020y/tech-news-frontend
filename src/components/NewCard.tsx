import React from 'react'
import Link from 'next/link'
interface NewProps {
  index: number
  published: string
  link: string
  title: string
  icon: string
}
const NewCard: React.FC<NewProps & React.RefAttributes<HTMLLIElement>> =
  React.forwardRef((props, ref) => {
    // 高阶函数，负责转发 ref
    const { index, published, link, title, icon } = props
    return (
      <li
        className="relative bg-white px-6 pt-6 pb-10 mb-6 rounded-lg shadow-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
        ref={ref}
        style={{
          transform: `translateX(${index % 2 === 0 ? '' : '-'}1500px)`
        }}
      >
        <span className="font-funnel sm:text-sm text-xs text-gray-500">
          {published}
        </span>
        <img
          src={icon}
          width="20"
          height="20"
          className="inline-block absolute right-6"
          onError={(e) => {
            ;(e.target as HTMLImageElement).src = '/placeholder.png'
          }}
        />
        <Link
          href={link}
          className="block font-funnel md:text-2xl sm:text-xl text-lg font-semibold text-gray-800 hover:text-blue-600 mt-2 transition-colors"
        >
          {title}
        </Link>
      </li>
    )
  })

export default NewCard

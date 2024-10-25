import Link from 'next/link'
import React from 'react'

interface ToolCardProps {
  title: string
  summary: string
}

const ToolCard: React.FC<ToolCardProps> = ({ title, summary }) => {
  return (
    <div className="relative w-96 h-48 border rounded-lg overflow-hidden shadow-lg shadow-gray-200 transition-transform duration-300 transform hover:scale-105">
      <div className="absolute inset-0 break-words bg-white p-8 transition-opacity duration-300 hover:opacity-0">
        <p className="font-bold w-full text-xl break-words overflow-hidden text-nowrap overflow-ellipsis">
          {title.split('/')[0]}/{title.split('/')[1]}
        </p>
        <p className="no-scrollbar overflow-auto h-12 mt-10">{summary}</p>
      </div>

      <div className="absolute inset-0 break-words bg-yellow-50 p-8 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <p className="font-bold w-full text-xl break-words overflow-hidden text-nowrap overflow-ellipsis">
          <Link
            href={`https://github.com/${title.split('/')[0]}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            {title.split('/')[0]}
          </Link>
          /
          <Link href={`https://github.com/${title}`} target="_blank" className="hover:text-blue-500">
            {title.split('/')[1]}
          </Link>
        </p>
        <Link href={`https://github.com/${title}`} target="_blank">
          <img
            className="absolute w-11/12 left-1/2 transform -translate-x-1/2 bottom-4 border rounded-lg"
            src={`https://gh-card.dev/repos/${title}.svg`}
            alt="Github Card"
          />
        </Link>
      </div>
    </div>
  )
}

export default ToolCard

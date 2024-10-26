import Link from 'next/link'
import React from 'react'
import TagButton from './TagButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faCodeFork } from '@fortawesome/free-solid-svg-icons'

interface ToolCardProps {
  title: string
  summary: string
  stars: number
  forks: number
}

const ToolCard: React.FC<ToolCardProps> = ({ title, summary, stars, forks }) => {
  return (
    <div className="relative w-96 h-48 border rounded-lg overflow-hidden shadow-lg shadow-gray-200 transition-transform duration-300 transform hover:scale-105">
      <div className="absolute inset-0 break-words bg-white p-8 transition-opacity duration-300 hover:bg-yellow-50">
        <p className="z-10 font-bold w-full text-xl break-words overflow-hidden text-nowrap overflow-ellipsis">
          <Link
            href={`https://github.com/${title.split('/')[0]}`}
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {title.split('/')[0]}
          </Link>
          /
          <Link
            href={`https://github.com/${title}`}
            target="_blank"
            className="hover:text-blue-500 transition-colors duration-200"
          >
            {title.split('/')[1]}
          </Link>
        </p>
        <p className="mt-2 flex gap-3">
          <TagButton number={stars} color={'#FFD43B'}>
            <FontAwesomeIcon
              icon={faStar}
              style={{ color: '#FFD43B', fontSize: "0.9rem" }}
            ></FontAwesomeIcon>
          </TagButton>
          <TagButton number={forks} color={'#5da4da'}>
            <FontAwesomeIcon
              icon={faCodeFork}
              style={{ color: '#389ae5', fontSize: "0.9rem" }}
            ></FontAwesomeIcon>
          </TagButton>
        </p>
        <p className="no-scrollbar overflow-auto h-12 mt-2.5">{summary}</p>
      </div>

      {/* <div className="absolute inset-0 break-words bg-yellow-50 p-8 transition-opacity duration-300 opacity-0 hover:opacity-100">
        <p className="z-10 font-bold w-full text-xl break-words overflow-hidden text-nowrap overflow-ellipsis">
          <Link
            href={`https://github.com/${title.split('/')[0]}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            {title.split('/')[0]}
          </Link>
          /
          <Link
            href={`https://github.com/${title}`}
            target="_blank"
            className="hover:text-blue-500"
          >
            {title.split('/')[1]}
          </Link>
        </p>
        <Link href={`https://github.com/${title}`} target="_blank">
          <img
            className="z-0 absolute w-11/12 left-1/2 transform -translate-x-1/2 bottom-4 border rounded-lg"
            src={`https://gh-card.dev/repos/${title}.svg`}
            alt="Github Card"
          />
        </Link>
      </div> */}
    </div>
  )
}

export default ToolCard

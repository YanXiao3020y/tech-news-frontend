'use client'
import { Link } from 'next-view-transitions'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

type DataType = {
  _id: string
  link: string
  published: string
  title: string
}

const fetchData = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/newest`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch data.')
  }
  return res.json()
}

function TrendingsArea() {
  const [data, setData] = useState<DataType[]>([])
  useEffect(() => {
    const loadTrendings = async () => {
      let res = (await fetchData()) as Array<DataType>
      res.sort(
        (a: DataType, b: DataType) =>
          new Date(b.published).getTime() - new Date(a.published).getTime()
      )
      res.splice(5)
      res.forEach((item) => {
        const date = new Date(item.published)
        item.published =
          date.getFullYear() +
          '-' +
          String(date.getMonth() + 1).padStart(2, '0') +
          '-' +
          String(date.getDate()).padStart(2, '0') +
          ' ' +
          String(date.getHours()).padStart(2, '0') +
          ':' +
          String(date.getMinutes()).padStart(2, '0')
      })
      setData(res)
    }
    loadTrendings()
  }, [])
  return (
    <div className="w-[700px] h-[580px] bg-white shadow-lg shadow-gray-200 rounded-lg flex flex-col items-center">
      <div className="flex items-center w-full px-10 py-8">
        <h1 className="font-[Inder] text-3xl mr-3">Trendings</h1>
        <FontAwesomeIcon icon={faArrowTrendUp} className="text-xl" />
      </div>
      <div className="w-3/4">
        <ol className="list-decimal">
          {data.map((item, index) => {
            return (
              <li className="mb-5" key={index}>
                <a href={item.link} className="no-underline hover:text-blue-600">{item.title}</a>
                <p className="text-sm text-gray-500 text-right transform translate-x-10">{item.published}</p>
              </li>
            )
          })}
        </ol>
      </div>
      <div className="w-full pb-3 pt-4 rounded-b-lg hover:bg-gray-100 transition-colors duration-300 mt-auto flex flex-col items-center">
        <Link href="/news">
          <FontAwesomeIcon icon={faChevronDown} className="text-xl"></FontAwesomeIcon>
        </Link>
      </div>
    </div>
  )
}
export default TrendingsArea

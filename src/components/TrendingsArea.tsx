'use client'
import styles from '../styles/TrendingsArea.module.css'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'

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
      let res = await fetchData() as Array<DataType>
      res.sort((a: DataType, b: DataType) => new Date(b.published).getTime() - new Date(a.published).getTime())
      res = res.slice(0, 5) 
      setData(res)
      console.log(data)
    }
    loadTrendings()
  }, [])
  return (
    <div className="w-[700px] h-[580px] bg-white shadow-lg shadow-gray-200 rounded-lg flex flex-col items-center pb-4">
      <div className={styles.header}>
        <h1 className={styles.title}>Trendings</h1>
        <FontAwesomeIcon icon={faArrowTrendUp} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <ol className={styles.list}>
          {data.map((item, index) => {
            return (
              <li className={styles.listItem} key={index}>
                <a href={item.link}>{item.title}</a>
                <p>{item.published}</p>
              </li>
            )
          })}
        </ol>
      </div>
    </div>
  )
}
export default TrendingsArea

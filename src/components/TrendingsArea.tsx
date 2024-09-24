'use client'
import styles from '../styles/TrendingsArea.module.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
interface TrendingItem {
  title?: string
  date?: string
  link?: string
}
function TrendingsArea() {
  const [data] = useState<Array<TrendingItem>>([
    {
      title: "UN Condemns 'Abhorrent' Terrorist Attacks in Pakistan",
      date: 'September 30, 2023',
      link: 'https://www.globalissues.org/news/2023/09/30'
    },
    {
      title: 'New Global Framework Adopted to Reduce Harmful Chemicals',
      date: 'September 30, 2023',
      link: 'https://www.globalissues.org/news/2023/09/30'
    },
    {
      title: 'AIADMK Quits BJP-Led NDA Alliance in Tamil Nadu',
      date: 'September 25, 2023',
      link: 'https://news.abplive.com/india-news/top-news-headlines-25-september-2023-1631109'
    },
    {
      title:
        'U.S. House Speaker Kevin McCarthy Launches Impeachment Inquiry Against President Biden',
      date: 'September 12, 2023',
      link: 'https://www.infoplease.com/current-events/september-2023-news'
    },
    {
      title: 'Texas Ordered to Move Border Buoys',
      date: 'September 6, 2023',
      link: 'https://www.theguardian.com/us-news/2023/sep/06'
    }
  ])
  return (
    <div className={styles.trendings}>
      <div className={styles.header}>
        <h1 className={styles.title}>Trendings</h1>
        <FontAwesomeIcon icon={faArrowTrendUp} className={styles.icon} />
      </div>
      <div className={styles.content}>
        <ol>
          {
            data.map((item, index) => {
              return (
                <li className={styles.listItem} key={index}>
                  <a href={item.link}>{item.title}</a>
                  <p>{item.date}</p>
                </li>
              )
            }) 
          }
        </ol>
      </div>
    </div>
  )
}
export default TrendingsArea

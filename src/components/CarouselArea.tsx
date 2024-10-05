'use client'
import styles from '../styles/CarouselArea.module.css'
import { useState, useEffect, useCallback } from 'react'
interface CarouselItem {
  title?: string
  descr?: string
  imageUrl?: string
}

function CarouselArea() {
  const [data] = useState<Array<CarouselItem>>([
    {
      title: 'Global Markets Rally as Tech Stocks Surge',
      descr:
        'Technology stocks led a global market rally today as investor sentiment improved on optimism around the latest earnings reports and positive economic data.'
    },
    {
      title: 'Breakthrough Achieved in Renewable Energy Technology',
      descr:
        'Scientists have developed a new solar panel technology that promises to significantly increase energy efficiency and reduce production costs, bringing the world closer to clean energy goals.'
    },
    {
      title: 'New Study Reveals the Impact of Social Media on Mental Health',
      descr:
        'A recent study suggests that heavy use of social media platforms is linked to increased anxiety and depression among young adults, sparking discussions on the need for regulation and digital well-being initiatives.'
    },
    {
      title: 'Major Earthquake Strikes Pacific Island Region',
      descr:
        'A 7.5 magnitude earthquake has struck a remote region of the Pacific, causing significant damage to infrastructure and leaving thousands displaced. Rescue and relief efforts are currently underway.'
    },
    {
      title: 'Innovative Startups Transforming the Future of Food',
      descr:
        'Several startups are at the forefront of transforming the food industry with plant-based meats, lab-grown proteins, and sustainable farming practices that aim to revolutionize what we eat and how we produce food.'
    }
  ])
  const [title, setTitle] = useState<string | undefined>(data[0].title)
  const [content, setContent] = useState<string | undefined>(data[0].descr)
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const toggleTo = useCallback(
    (index: number): void => {
      if (data[index] !== undefined) {
        setActiveIndex(index)
        // setImgURL(data[index].imageUrl)
        setTitle(data[index].title)
        setContent(data[index].descr)
      }
    },
    [data]
  )
  useEffect(() => {
    toggleTo(0)
  }, [toggleTo])
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      toggleTo((activeIndex + 1) % data.length)
    }, 2000)
    return () => clearTimeout(timeoutId)
  }, [activeIndex, toggleTo, data])
  return (
    <div className={styles.carousel}>
      <div className={styles.title}>
        <span>{title}</span>
      </div>
      <div className={styles.descr}>
        <span>{content}</span>
      </div>
      {data.map((item, index) => {
        return (
          <i
            className={index === activeIndex ? styles.activeItem : ''}
            key={index}
            onClick={() => toggleTo(index)}
            style={{
              transform: `translateX(${
                (index - (data.length / 2 - 1)) * 18 +
                (index > activeIndex ? 10 : 0)
              }px)`
            }}
          ></i>
        )
      })}
    </div>
  )
}

export default CarouselArea

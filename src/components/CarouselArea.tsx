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
        title: 'Ubuntu 24.04 LTS',
        descr:
          'Ubuntu 24.04 is an upcoming release of the popular Linux distribution, Ubuntu, which is known for its user-friendly interface and wide range of applications. Ubuntu is developed by Canonical Ltd. and has a strong focus on usability, making it a preferred choice for both beginners and advanced users in the Linux community.',
        imageUrl:
          'https://falling-sakura1-1316699389.cos.ap-nanjing.myqcloud.com/image/202409091738893.webp'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '从0到1：用HTML、CSS和JavaScript构建经典案例',
        descr:
          '本案例旨在通过构建一个简单的新闻网站，使读者从零开始学习并掌握前端技术。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: 'DIY网站建设教程，零基础也能轻松搞定',
        descr: '在这个数字化时代，拥有一个属于自己的网站仿佛成了必备的“装备”。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '从 0 开始学习搭建自己的网站（详细版）',
        descr: '本文不讲废话，现在就开始教你一步步搭建自己的网站。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '新闻发布及管理系统的设计与实现',
        descr:
          '基于web的新闻发布及管理系统的设计与实现，是动态网页和数据库结合，通过事件来处理新闻。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '新闻发布系统：需求分析以及项目的设计',
        descr:
          '新闻发布系统是新闻媒体或者自媒体推送实时新闻，让其他用户或者游客阅读的网站。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '资讯网站模板_资讯网页模板免费下载',
        descr: '提供多种资讯网站模板，包括响应式设计，适合各种新闻资讯类网站。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '宽屏新闻资讯博客类响应式HTML模板',
        descr:
          '黑色主色调的宽屏新闻资讯博客类响应式HTML模板，适合新闻资讯网站使用。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '创业资讯新闻门户网站HTML5模板',
        descr: '适用于创业资讯、新闻资讯网站模板、博客网站主题等的HTML5模板。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '红色风格综合新闻门户网站HTML模板',
        descr: '中规中矩的新闻类网站设计，一个综合新闻门户网站的HTML模板。'
      },
      {
        imageUrl: 'https://via.placeholder.com/600',
        title: '响应式的留学信息网bootstrap模板',
        descr:
          '一款留学信息网站前端HTML模板，基于Bootstrap构造，自适应手机端设备。'
      }
    ])
  const [imgURL, setImgURL] = useState<string | undefined>('')
  const [title, setTitle] = useState<string | undefined>('Ubuntu 24.04 LTS')
  const [content, setContent] = useState<string | undefined>('')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const toggleTo = useCallback(
    (index: number): void => {
      if (data[index] !== undefined) {
        setActiveIndex(index)
        setImgURL(data[index].imageUrl)
        setTitle(data[index].title)
        setContent(data[index].descr)
      }
    }, [data]
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
      <div
        className={styles.image}
        style={{ backgroundImage: `url(${imgURL})` }}
      ></div>
      <div className={styles.descr}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.content}>
          <span>{content}</span>
        </div>
      </div>
      {data.map((item, index) => {
        return (
          <i
            className={index === activeIndex ? styles.activeItem : ''}
            key={index}
            onClick={() => toggleTo(index)}
            style={{
              transform: `translateX(${
                (index - (data.length / 2 - 1))  * 18 + (index > activeIndex ? 10 : 0)
              }px)`
            }}
          ></i>
        )
      })}
    </div>
  )
}

export default CarouselArea

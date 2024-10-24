'use client'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import React from 'react'

type DataType = {
  _id: string
  link: string
  published: string
  title: string
}

async function fetchNews() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/newest`, {
    cache: 'no-store' // 避免缓存，确保每次都获取最新数据
  })
  if (!res.ok) {
    throw new Error('Failed to fetch news')
  }
  return res.json() // to json
}

export default function NewsPage() {
  const [news, setNews] = useState<DataType[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const boxesRef = useRef<HTMLLIElement[]>([])
  const addToRefs = (el: HTMLLIElement) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el)
    }
  }

  useEffect(() => {
    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4
      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop > triggerBottom) {
          box.classList.remove('show')
        } else {
          box.classList.add('show')
        }
      })
    }
    async function loadNews() {
      try {
        setLoading(true)
        const data = await fetchNews()
        setNews(data)
      } catch (err) {
        setError((err as Error).message)
      } finally {
        setLoading(false)
      }
    }
    const addAnimation = async () => {
      await loadNews()
      window.addEventListener('scroll', checkBoxes)
      checkBoxes()
    }
    addAnimation()
    return () => {
      window.removeEventListener('scroll', checkBoxes)
    }
  }, [])

  if (loading) {
    return (
      <ClientMotionWrapper>
        <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
          <div className="rounded-2xl flex justify-center items-center">
            Loading...
          </div>
        </div>
      </ClientMotionWrapper>
    )
  }
  if (error) {
    return (
      <div className="w-full h-screen bg-gray-100 flex justify-center items-center">
        <div className="w-40 h-20 bg-white rounded-2xl flex justify-center items-center shadow-lg">
          Error: {error}
        </div>
      </div>
    )
  } else
    return (
      <ClientMotionWrapper>
        <div className="w-full min-h-screen bg-gray-100">
          <div className="max-w-3xl mx-auto p-8 text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-10"></h1>
            <ul>
              {news.map((item, index) => (
                <li
                  key={item._id}
                  className="bg-white p-6 mb-6 rounded-lg shadow-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
                  ref={addToRefs}
                  style={{
                    transform: `translateX(${index % 2 === 0 ? '' : '-'}1500px)`
                  }}
                >
                  <span className="text-sm text-gray-500">
                    {item.published.slice(0, -6)}
                  </span>
                  <Link
                    href={item.link}
                    className="block text-2xl font-semibold text-gray-800 hover:text-blue-600 mt-2 transition-colors"
                  >
                    {item.title}
                  </Link>
                  <p className="text-gray-600 mt-4"></p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ClientMotionWrapper>
    )
}

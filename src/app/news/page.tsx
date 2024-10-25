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
    cache: 'no-store'
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
    loadNews()
  }, [])

  useEffect(() => {
    if (news.length === 0) {
      return
    }

    function checkBoxes() {
      console.log(boxesRef.current)
      const triggerBottom = (window.innerHeight / 6) * 5 //
      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        console.log(boxTop, triggerBottom)
        if (boxTop > triggerBottom) {
          box.classList.remove('show')
        } else {
          box.classList.add('show')
        }
      })
      console.log('Boxes checked.') //
    }

    window.addEventListener('scroll', checkBoxes)
    checkBoxes()
    return () => {
      window.removeEventListener('scroll', checkBoxes)
    }
  }, [news])

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
        <div className="p-5 bg-white rounded-2xl flex justify-center items-center shadow-lg">
          Error: {error}
        </div>
      </div>
    )
  } else
    return (
      <ClientMotionWrapper>
        <div className="mx-auto max-w-4xl p-8">
          <h1 className="text-4xl font-[Iceberg] font-bold mb-10">News</h1>
          <div className="max-w-3xl mx-auto text-gray-800">
            <ul>
              {news.map((item, index) => (
                <li
                  key={item._id}
                  className="bg-white border p-6 mb-6 rounded-lg shadow-gray-200 shadow-lg transition-all duration-300 hover:shadow-xl"
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

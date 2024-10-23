'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'

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
  const [news, setNews] = useState<DataType[]>([]) // 存储新闻数据
  const [loading, setLoading] = useState<boolean>(true) // 存储加载状态
  const [error, setError] = useState<string | null>(null) // 存储错误信息

  useEffect(() => {
    async function loadNews() {
      try {
        setLoading(true) // 开始加载
        const data = await fetchNews()
        setNews(data) // 设置新闻数据
      } catch (err) {
        setError((err as Error).message) // 设置错误信息
      } finally {
        setLoading(false) // 加载结束
      }
    }

    loadNews()
  }, []) // 空依赖数组，确保只在组件首次挂载时运行

  if (loading) {
    return (
      <div className="w-full h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-40 h-20 bg-white rounded-2xl flex justify-center items-center shadow-lg">Loading...</div>
      </div>
    )
  }
  if (error) {
    return (
      <div className="w-full h-screen bg-gray-50 flex justify-center items-center">
        <div className="w-40 h-20 bg-white rounded-2xl flex justify-center items-center shadow-lg">Error: {error}</div>
      </div>
    )
 // 如果请求失败，显示错误信息
  } else
    return (
      <>
        <div className="w-full min-h-screen bg-gray-100">
          <div className="max-w-3xl mx-auto p-8 text-gray-800">
            <h1 className="text-4xl font-bold text-center mb-10"></h1>
            <ul>
              {news.map((item) => (
                <li
                  key={item._id}
                  className="bg-white p-6 mb-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
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
      </>
    )
}

'use client'
import NavBar from '@/components/NavBar'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import axios from 'axios'

type dataType = {
  _id: string
  link: string
  published: string
  // summary: string
  title: string
}

export default function NewsPage() {
  const [news, setNews] = useState<Array<dataType>>([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('http://localhost:5001/newest')
        console.log(typeof res)
        setNews(res.data)
      } catch (err) {
        console.error(err)
      }
    }

    fetchData()

    // setNews([
    //   {
    //     _id: '1',
    //     link: 'https://example.com/article-1',
    //     published: '2024-10-01',
    //     summary:
    //       'AI technology is advancing at an unprecedented rate, revolutionizing industries from healthcare to finance.',
    //     title: 'AI Breakthroughs Reshape Global Industries'
    //   },
    //   {
    //     _id: '2',
    //     link: 'https://example.com/article-2',
    //     published: '2024-09-25',
    //     summary:
    //       'The latest smartphones are setting new standards with foldable screens and 5G connectivity, paving the way for future innovations.',
    //     title: 'Next-Gen Smartphones with Foldable Displays Hit the Market'
    //   },
    //   {
    //     _id: '3',
    //     link: 'https://example.com/article-3',
    //     published: '2024-09-20',
    //     summary:
    //       'Scientists have successfully created quantum computers that outperform traditional machines in complex calculations.',
    //     title: 'Quantum Computing Achieves Major Milestone in Performance'
    //   },
    //   {
    //     _id: '4',
    //     link: 'https://example.com/article-4',
    //     published: '2024-09-15',
    //     summary:
    //       'SpaceX announces new plans for a manned mission to Mars, aiming to establish a human colony within the next decade.',
    //     title: 'SpaceX Unveils Ambitious Mars Colonization Plan'
    //   },
    //   {
    //     _id: '5',
    //     link: 'https://example.com/article-5',
    //     published: '2024-09-10',
    //     summary:
    //       'The integration of blockchain technology into supply chains is enhancing transparency and reducing fraud across industries.',
    //     title: 'Blockchain Revolutionizes Global Supply Chains'
    //   },
    //   {
    //     _id: '6',
    //     link: 'https://example.com/article-6',
    //     published: '2024-09-05',
    //     summary:
    //       'Renewable energy technologies are growing rapidly, with solar and wind leading the charge in reducing global carbon emissions.',
    //     title: 'Renewable Energy Innovation Drives Global Sustainability'
    //   },
    //   {
    //     _id: '7',
    //     link: 'https://example.com/article-7',
    //     published: '2024-09-01',
    //     summary:
    //       'Self-driving cars are becoming more reliable and accessible, with major automakers planning full-scale rollouts by 2025.',
    //     title: 'Self-Driving Cars Poised for Mass Adoption by 2025'
    //   }
    // ])
  }, [])
  return (
    <>
      <NavBar />
      <div className="w-full min-h-screen bg-gray-100">
        <div className="max-w-3xl mx-auto p-8 text-gray-800">
          <h1 className="text-4xl font-bold text-center mb-10">Tech News</h1>
          <ul>
            {news.map((item) => (
              <li
                key={item._id}
                className="bg-white p-6 mb-6 rounded-lg shadow-lg transition-shadow hover:shadow-xl"
              >
                <span className="text-sm text-gray-500">{item.published.slice(0, -6)}</span>
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

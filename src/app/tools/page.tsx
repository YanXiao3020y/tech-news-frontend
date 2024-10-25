'use client'
import { useEffect, useState } from 'react'
import ToolCard from '@/components/ToolCard'
import { motion } from 'framer-motion'
type Tools = {
  _id: string
  title: string
  summary: string
}
async function fetchTools() {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/tool`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products.')
  }
  return res.json()
}
export default function ToolsPage() {
  const [tools, setTools] = useState<Tools[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const id = setInterval(() => {
      loadTools()
    }, 5000)
    async function loadTools() {
      const data = await fetchTools()
      setLoading(false)
      setTools(data)
      clearInterval(id)
    }
    return () => {
      clearInterval(id)
    }
  }, [])
  if (loading) {
    return (
      <div className="flex text-gray-500 w-full h-full justify-center items-center">
        loading...
      </div>
    )
  }
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Tools</h1>
      <div className="grid grid-cols-2 max-w-fit gap-8 mx-auto text-gray-800">
        {/* <ToolCard
            key={tools[0]._id}
            title={tools[0].title}
            summary={tools[0].summary}
        ></ToolCard> */}
        {tools.map((item, index) => (
          <motion.div
            key={item._id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            <ToolCard title={item.title} summary={item.summary}></ToolCard>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

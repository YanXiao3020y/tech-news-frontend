'use client'
import { useEffect, useState } from 'react'
import ToolCard from '@/components/ToolCard'
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

  useEffect(() => {
    async function loadTools() {
      const data = await fetchTools()
      setTools(data)
    }
    loadTools()
  })
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Tools</h1>
      <div className="grid grid-cols-3 max-w-fit gap-6 mx-auto text-gray-800">
        {tools.map((item) => (
          <ToolCard
            key={item._id}
            title={item.title}
            summary={item.summary}
          ></ToolCard>
        ))}
        {/* {products.map((item) => {
          return (
            <ProductCard
              author={item.author}
              productName={item.title.replace(/\s+/g, '')}
              releaseDate={item.date_published}
              description={item.guid}
              link={item.url}
            ></ProductCard>
          )
        })} */}
        {/* <div className="w-80 h-48 text-gray-500 flex justify-center items-center text-xl">
          {text}
        </div> */}
      </div>
    </div>
  )
}

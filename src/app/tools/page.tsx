'use client'
import { useEffect, useState } from 'react'
import ToolCard from '@/components/ToolCard'
import useLoadFunction from '@/components/LoadFunction'
import withLoadingError from '@/components/withLoadingError'
import Processing from '@/components/ProcessingCmp'
import { motion } from 'framer-motion'
type Tool = {
  _id: string
  title: string
  summary: string
}

function ToolsPage({data}: {
  data: Tool[]
}) {
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray-800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Tools</h1>
      <div className="grid grid-cols-2 max-w-fit gap-8 mx-auto text-gray-800">
        {data?.map((item, index) => (
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

export default withLoadingError<Tool[]>(ToolsPage, {
  url: 'tool'
})
import React from 'react'

interface ToolCardProps {
  title: string
  summary: string
}

const ToolCard: React.FC<ToolCardProps> = ({
  title,
  summary
}) => {
  return (
  <div className="break-words w-80 h-48 bg-white p-8 rounded-lg shadow-lg">
    <h2 className="font-semibold text-xl mb-5">{title}</h2>
    <p className="no-scrollbar overflow-auto h-12">{summary}</p>
  </div>
  )
}

export default ToolCard

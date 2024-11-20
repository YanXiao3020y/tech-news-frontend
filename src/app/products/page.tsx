'use client'
import withLoadingError from '@/components/withLoadingError'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'
import React from 'react'

type Product = {
  id: string
  author: string
  date_published: string
  guid: string
  title: string
  url: string
  icon_url: string
  tag_line: string
  description: Array<string>
}

const transformData = (res: Product[]) => {
  res.forEach((item) => {
    const date = new Date(item.date_published)
    item.date_published =
      date.getFullYear() +
      '-' +
      String(date.getMonth() + 1).padStart(2, '0') +
      '-' +
      String(date.getDate()).padStart(2, '0') +
      ' ' +
      String(date.getHours()).padStart(2, '0') +
      ':' +
      String(date.getMinutes()).padStart(2, '0')
  })
  return res
}

function ProductsPage({ data }: { data: Product[] }) {
  return (
    <div className="md:max-w-6xl mx-auto p-8">
      <h1 className="text-3xl md:text-4xl font-[Iceberg] font-bold mb-10">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-fit gap-3 md:gap-6 mx-auto text-gray-800">
        {transformData(data).map((item, index) => (
          <motion.div
            key={item.guid}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: 'easeOut' }}
          >
            <ProductCard
              author={item.author}
              productName={item.title.replace(/\s+/g, '')}
              releaseDate={item.date_published}
              description={item.description[0]}
              link={item.url}
              icon={item.icon_url}
              tag={item.tag_line}
            ></ProductCard>
          </motion.div>
        ))}
        <div className="w-80 h-48 text-gray-500 flex justify-center items-center text-xl">
          no more
        </div>
      </div>
    </div>
  )
}

export default withLoadingError<Product[]>(ProductsPage, {
  url: 'products'
})

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
}

function ProductsPage({ data }: { data: Product[] }) {
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Products</h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 max-w-fit gap-6 mx-auto text-gray-800">
        {data?.map((item, index) => (
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
              description={item.guid}
              link={item.url}
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


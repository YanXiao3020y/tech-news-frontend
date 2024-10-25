'use client'
import { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'
import { motion } from 'framer-motion'
type Products = {
  id: string
  author: string
  date_published: string
  guid: string
  title: string
  url: string
}

const fetchProducts = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_API_BASE_URL
  const res = await fetch(`${baseUrl}/products`, {
    cache: 'no-store'
  })
  if (!res.ok) {
    throw new Error('Failed to fetch products.')
  }
  return res.json()
}
export default function ProductsPage() {
  const [products, setProducts] = useState<Products[]>([])
  const [text, setText] = useState<string>('loading...')
  useEffect(() => {
    const id = setInterval(() => {
      loadProducts()
    }, 5000)
    async function loadProducts() {
      const data = await fetchProducts()
      setProducts(data)
      setText('No more')
      clearInterval(id)
    }
    return () => {
      clearInterval(id)
    }
  }, [])
  return (
    <div className="max-w-6xl mx-auto p-8 text-gray800">
      <h1 className="text-4xl font-[Iceberg] font-bold mb-10">Products</h1>
      <div className="grid grid-cols-3 max-w-fit gap-6 mx-auto text-gray-800">
        {products.map((item, index) => (
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
          {text}
        </div>
      </div>
    </div>
  )
}
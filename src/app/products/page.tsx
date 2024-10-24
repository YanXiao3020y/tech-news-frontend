'use client'
import { useEffect, useState } from 'react'
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
  useEffect(() => {
    async function loadProducts() {
      const data = await fetchProducts()
      setProducts(data)
    } 
    loadProducts()
  })
  return (
    <>
      <h1>Products</h1>
      <ul>{products.map((item) => {
        return (
          <li>
            <p>{item.author}</p>
            <p>{item.date_published}</p>
            <p>{item.title}</p>
            <p>{item.url}</p>
          </li>
        )
      })}</ul>
    </>
  )
}

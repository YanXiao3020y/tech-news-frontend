'use client'
import { useRef, useEffect } from 'react'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import withLoadingError from '@/components/withLoadingError'
import NewCard from '@/components/NewCard'
import React from 'react'

type New = {
  _id: string
  link: string
  published: string
  title: string
  icon_url: string
}

function formatData(res: New[]) {
  res.forEach((item) => {
    const date = new Date(item.published)
    item.published =
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

function NewsPage({ data }: { data: New[] }) {
  const boxesRef = useRef<HTMLLIElement[]>([])
  const addToRefs = (el: HTMLLIElement) => {
    if (el && !boxesRef.current.includes(el)) {
      boxesRef.current.push(el)
    }
  }
  useEffect(() => {
    if (data && data.length === 0) {
      return
    }

    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 7) * 6 //
      boxesRef.current.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top
        if (boxTop > triggerBottom) {
          box.classList.remove('show')
        } else {
          box.classList.add('show')
        }
      })
    }

    window.addEventListener('scroll', checkBoxes)
    checkBoxes()
    return () => {
      window.removeEventListener('scroll', checkBoxes)
    }
  }, [data])

  return (
    <ClientMotionWrapper>
      <div className="mx-auto max-w-4xl p-8">
        <h1 className="sm:text-4xl text-3xl font-[Iceberg] font-bold mb-10">
          News
        </h1>
        <div className="max-w-3xl mx-auto text-gray-800">
          <ul>
            {formatData(data).map((item, index) => (
              <NewCard
                key={item._id}
                index={index}
                published={item.published}
                link={item.link}
                title={item.title}
                icon={item.icon_url}
                ref={addToRefs}
              >
              </NewCard>
            ))}
          </ul>
        </div>
      </div>
    </ClientMotionWrapper>
  )
}

export default withLoadingError<New[]>(NewsPage, {
  url: 'newest'
})

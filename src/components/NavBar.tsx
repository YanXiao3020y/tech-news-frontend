'use client'
import React from 'react'
import Image from 'next/image'
import { Link } from 'next-view-transitions'
import ExpandMenu from './ExpandMenu'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const navList: Array<string> = ['CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  const [isActive, setIsActive] = useState(false)
  return (
    <div className="bg-gradient-to-b from-white to-gray-100 h-[75px] w-full min-h-[70px] flex justify-center items-center sticky top-0 z-10">
      <Link href="/">
        <div className="no-select absolute top-0 left-6 w-10 h-[75px] flex items-center justify-center">
          <Image src="/favicon.ico" alt="icon" width="40" height="40" />
        </div>
      </Link>
      <div className="no-select w-[600px] h-full flex justify-around">
        <div
          className="font-inknut text-[1rem] h-full relative inline-block leading-[75px]"
          onMouseOver={() => {
            setIsActive(true)
          }}
          onMouseLeave={() => {
            setIsActive(false)
          }}
        >
          NEWS
          <FontAwesomeIcon className="h-5 w-5 ml-2.5" icon={faChevronDown} />
          <ExpandMenu status={isActive} />
        </div>
        {navList.map((item, index) => {
          return (
            <Link
              className="font-inknut text-[1rem] h-full relative inline-block leading-[75px]"
              href={`/${item.toLowerCase()}`}
              key={index}
            >
              {item}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar

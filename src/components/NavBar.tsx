'use client'
import styles from '../styles/NavBar.module.css'
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
      <div className={`${styles.nav} ${styles['no-select']}`}>
        <div
          className={styles.item}
          onMouseOver={() => {
            setIsActive(true)
          }}
          onMouseLeave={() => {
            setIsActive(false)
          }}
        >
          NEWS
          <FontAwesomeIcon className={styles.icon} icon={faChevronDown} />
          <ExpandMenu status={isActive} />
        </div>
        {navList.map((item, index) => {
          return (
            <Link
              className={styles.item}
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

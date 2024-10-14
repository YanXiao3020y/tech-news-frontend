'use client'
import styles from '../styles/NavBar.module.css'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ExpandMenu from './ExpandMenu'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
function NavBar() {
  const navList: Array<string> = ['CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  const [isActive, setIsActive] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={`${styles.title} ${styles['no-select']}`}>
          <Image src="/favicon.ico" alt="icon" width="36" height="36" />
          <h1>NEWS</h1>
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

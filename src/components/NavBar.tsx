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
  const navList: Array<string> = ['NEWS', 'CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
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
        {navList.map((item, index) => {
          const isNewsItem = item === 'NEWS'
          return (
            <Link
              className={`${styles.item} ${
                isNewsItem ? styles.isNewsItem : ''
              }`}
              href={`/${isNewsItem ? '' : item.toLowerCase()}`}
              key={index}
              onMouseOver={() => {
                setIsActive(true)
              }}
              onMouseLeave={() => {
                setIsActive(false)
              }}
            >
              {item}
              {isNewsItem && (
                <>
                  <FontAwesomeIcon
                    className={styles.icon}
                    icon={faChevronDown}
                  />
                  <ExpandMenu status={isActive}></ExpandMenu>
                </>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar

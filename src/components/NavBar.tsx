'use client'
import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
function NavBar() {
  const navList: Array<string> = ['NEWS', 'CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  const [hovered, setHovered] = useState(false)
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={`${styles.title} ${styles['no-select']}`}>
          <Image src="/favicon.ico" alt="icon" width="50" height="50" />
          <h1>NEWS</h1>
        </div>
      </Link>
      <div className={`${styles.nav} ${styles['no-select']}`}>
        {navList.map((item, index) => {
          return (
            <Link
              className={styles.item}
              href={`/${item.toLowerCase()}`}
              key={index}
              onMouseOver={() => item === 'NEWS' && setHovered(true)}
              onMouseLeave={() => item === 'NEWS' && setHovered(false)}
            >
              {item}
              {hovered && item === 'NEWS' && (
                <div className={styles.panel}></div>
              )}
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default NavBar

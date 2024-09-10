import styles from '../styles/NavBar.module.css'
import Image from 'next/image'
import Link from 'next/link'
function NavBar () {
  const navList: Array<string> = ['NEWS', 'CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  return (
    <div className={styles.container}>
      <Link href="/">
        <div className={`${styles.title} ${styles['no-select']}`}>
          <Image src="/favicon.ico" alt="icon" width="50" height="50"/>
          <h1>NEWS</h1>
        </div>
      </Link>
      <div className={`${styles.nav} ${styles['no-select']}`}>
        {navList.map((item, index) => (
          <Link className={styles.item} href={`/${item.toLowerCase()}`} key={index}>
            {item}
          </Link>
        ))}
      </div>
    </div>
  )
}

export default NavBar
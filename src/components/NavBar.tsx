import styles from './NavBar.module.css'
import Image from 'next/image'
const NavBar = () => {
  const navList: Array<string> = ['NEWS', 'CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Image src="/favicon.ico" alt="icon" width="50" height="50"/>
        <h1>NEWS</h1>
      </div>
      <div className={styles.nav}>
        {navList.map((item, index) => (
          <div className={styles.item} key={index}>
            {item}
          </div>
        ))}
      </div>
    </div>
  )
}

export default NavBar
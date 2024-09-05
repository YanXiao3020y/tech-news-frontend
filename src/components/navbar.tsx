import styles from './navbar.module.css'
export const NavBar = () => {
  const navList: Array<string> = ['NEWS', 'CATEGORIES', 'ARCHIVES', 'SUBSCRIBE']
  return (
    <div className={styles.container}>
      <div className={styles.title}>
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

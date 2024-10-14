import styles from '../styles/ExpandMenu.module.css'
import Link from 'next/link'
function ExpandMenu({ status }: { status?: boolean}) {
  const items = ['news', 'products', 'ideas']
  return (
    <div className={`${styles.panel} ${status ? styles.active : ''}`}>
      {items.map((item, index) => {
        return <Link className={styles.item} key={index} href={`/${item}`}>{item}</Link>
        // return <div></div>
      })}
    </div>
  )
}

export default ExpandMenu

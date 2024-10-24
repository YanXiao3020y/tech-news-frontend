import styles from '../styles/ExpandMenu.module.css'
import { Link } from 'next-view-transitions'
function ExpandMenu({ status }: { status?: boolean}) {
  const items = ['news', 'products', 'tools']
  return (
    <div className={`${styles.panel} ${status ? styles.active : ''}`}>
      {items.map((item, index) => {
        return <Link className={styles.item} key={index} href={`/${item}`}>{item}</Link>
      })}
    </div>
  )
}

export default ExpandMenu

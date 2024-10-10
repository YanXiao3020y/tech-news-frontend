import styles from '../styles/ExpandMenu.module.css'
function ExpandMenu({ status }: { status?: boolean}) {
  const items = ['news', 'products', 'ideas']
  return (
    <div className={`${styles.panel} ${status ? styles.active : ''}`}>
      {items.map((item, index) => {
        return <div className={styles.item} key={index}>{item}</div>
      })}
    </div>
  )
}

export default ExpandMenu

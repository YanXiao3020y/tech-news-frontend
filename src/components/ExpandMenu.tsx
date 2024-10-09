import styles from '../styles/ExpandMenu.module.css'
function ExpandMenu({ className }: { className?: string }) {
  const items = ['news', 'products', 'ideas']
  return (
    <div className={`${styles.panel} ${className}`}>
      {items.map((item, index) => {
        return <div className={styles.item} key={index}>{item}</div>
      })}
    </div>
  )
}

export default ExpandMenu

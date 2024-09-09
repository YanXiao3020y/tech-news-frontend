import styles from '../styles/CarouselArea.module.css'
function CarouselArea() {
  const imgURL = 'https://falling-sakura1-1316699389.cos.ap-nanjing.myqcloud.com/image/202409091738893.webp'
  const title = 'Ubuntu 24.04 LTS'
  const content = 'Ubuntu 24.04 is an upcoming release of the popular Linux distribution, Ubuntu, which is known for its user-friendly interface and wide range of applications. Ubuntu is developed by Canonical Ltd. and has a strong focus on usability, making it a preferred choice for both beginners and advanced users in the Linux community.'
  return (
    <div className={styles.carousel}>
      <div className={styles.image} style={{backgroundImage: `url(${imgURL})`}}></div>
      <div className={styles.descr}>
        <div className={styles.title}>
          <span>{title}</span>
        </div>
        <div className={styles.content}>
          <span>{content}</span>
        </div>
      </div>
    </div>
  )
}

export default CarouselArea

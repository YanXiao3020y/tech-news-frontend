import styles from './HomePageContent.module.css'
import Carousel from '../components/Carousel'
import Features from '../components/Features'
import Trendings from '../components/Trendings'
const HomePageContent = () => {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
        <Carousel />
        <Trendings />
        <Features />
      </div>
    </div>
  )
}

export default HomePageContent

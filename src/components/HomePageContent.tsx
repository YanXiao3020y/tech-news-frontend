import styles from '../styles/HomePageContent.module.css'
import CarouselArea from './CarouselArea'
import FeaturesArea from './FeaturesArea'
import TrendingsArea from './TrendingsArea'
function HomePageContent() {
  return (
      <div className={styles.container}>
        <CarouselArea />
        <div className={styles["bottom-container"]}>
          <TrendingsArea />
          <FeaturesArea />
        </div>
      </div>
  )
}

export default HomePageContent

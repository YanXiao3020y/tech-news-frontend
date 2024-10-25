import CarouselArea from '@/components/CarouselArea'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
// import FeaturesArea from '@/components/FeaturesArea'
import TrendingsArea from '@/components/TrendingsArea'
export default function Home() {
  return (
    <div className="flex flex-col h-[max(90vh,1000px)] pb-5 items-center">
      <CarouselArea />
      <TrendingsArea />
      {/* <div className={styles["bottom-container"]}> */}
      {/* </div> */}
    </div>
  )
}

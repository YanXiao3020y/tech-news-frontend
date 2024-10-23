import CarouselArea from '@/components/CarouselArea'
// import FeaturesArea from '@/components/FeaturesArea'
import TrendingsArea from '@/components/TrendingsArea'
export default function Home() {
  return (
      <div className="flex flex-col h-[max(90vh,925px)] pb-[50px] gap-[50px] items-center">
        <CarouselArea />
        <TrendingsArea />
        {/* <div className={styles["bottom-container"]}> */}
        {/* </div> */}
      </div>
  )
}

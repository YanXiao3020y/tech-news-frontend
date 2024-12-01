"use client";
import CarouselArea from "@/components/CarouselArea";
import TrendingsArea from "@/components/TrendingsArea";
import withLoadingError from "@/components/withLoadingError";
type DataType = {
  _id: string;
  link: string;
  published: string;
  title: string;
};
function HomePage({ data }: { data: DataType[] }) {
  return (
    <div className="relative flex h-[calc(100vh-75px)] w-screen flex-col items-center overflow-hidden">
      <CarouselArea />
      <TrendingsArea data={data} />
    </div>
  );
}
export default withLoadingError<DataType[]>(HomePage, {
  url: "newest",
});

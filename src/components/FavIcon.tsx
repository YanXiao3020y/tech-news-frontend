import Image from "next/image";
import Link from "next/link";
function Favicon() {
  return (
    <div className="no-select relative left-0 top-0 flex h-[75px] w-[75px] items-center justify-center">
      <Link href="/">
        <Image src="/favicon.ico" alt="icon" width="50" height="50" />
      </Link>
    </div>
  );
}
export default Favicon;

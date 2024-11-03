import Image from "next/image";
import { Link } from "next-view-transitions";
function Favicon() {
  return (
    <Link href="/">
      <div className="no-select absolute top-0 left-6 w-10 h-[75px] flex items-center justify-center">
        <Image src="/favicon.ico" alt="icon" width="40" height="40" />
      </div>
    </Link>
  );
}
export default Favicon;

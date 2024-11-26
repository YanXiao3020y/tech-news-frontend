import Image from 'next/image'
import Link from 'next/link'
function Favicon() {
  return (
    <div className="no-select relative top-0 left-0 w-[75px] h-[75px] flex items-center justify-center">
      <Link href="/">
        <Image src="/favicon.ico" alt="icon" width="50" height="50" />
      </Link>
    </div>
  )
}
export default Favicon

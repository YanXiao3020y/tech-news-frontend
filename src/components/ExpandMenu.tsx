import styles from '../styles/ExpandMenu.module.css'
import { Link } from 'next-view-transitions'
function ExpandMenu({ status }: { status?: boolean }) {
  const items = ['news', 'products', 'tools']
  return (
    <div className={`flex flex-col w-32 h-44 rounded-lg shadow-lg bg-white absolute left-1/2 transform -translate-x-[60%] -translate-y-4 overflow-hidden opacity-0 transition-all duration-300 ease-in-out ${status ? 'opacity-100' : ''}`}>
      {items.map((item, index) => {
        return (
          <Link
            className="flex justify-center items-center flex-grow transition-all leading-normal ease-in-out hover:bg-black/10"
            key={index}
            href={`/${item}`}
          >
            {item}
          </Link>
        )
      })}
    </div>
  )
}

export default ExpandMenu

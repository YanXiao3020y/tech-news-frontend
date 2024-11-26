import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
function ToggleButton({
  togglNav,
  toggle
}: {
  togglNav: boolean
  toggle: () => void
}) {
  return (
    <div
      className={`sm:hidden block z-20 fixed top-0 right-0 transform transition-all duration-300 ${
        togglNav ? '' : ''
      }`}
    >
      {/* <div
        className="flex justify-center items-center cursor-pointer h-[75px] w-[75px] text-3xl"
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div> */}
      <div
        className="relative flex justify-center items-center cursor-pointer h-[75px] w-[75px] text-3xl"
        onClick={toggle}
      >
        <span className={`w-6 h-[3px] rounded-sm bg-black absolute transition-all duration-300 ${togglNav ? 'opacity-0' : 'opacity-1'}`}></span>
        <span className={`w-6 h-[3px] rounded-sm bg-black absolute transition-all duration-300 -translate-y-2 ${togglNav ? 'translate-y-0 rotate-45' : ''}`}></span>
        <span className={`w-6 h-[3px] rounded-sm bg-black absolute transition-all duration-300 translate-y-2 ${togglNav ? 'translate-y-0 -rotate-45' : ''}`}></span>
      </div>
    </div>
  )
}
export default ToggleButton

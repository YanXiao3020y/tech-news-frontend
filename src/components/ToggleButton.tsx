import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
function ToggleButton({
  togglNav,
  toggle,
}: {
  togglNav: boolean;
  toggle: () => void;
}) {
  return (
    <div className={`sm:hidden block z-20 absolute top-0 right-0 transform transition-all duration-300 ${togglNav ? 'rotate-90' : ''}`}>
      <div
        className="flex justify-center items-center cursor-pointer h-[75px] w-[75px] text-3xl"
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div>
    </div>
  );
}
export default ToggleButton;

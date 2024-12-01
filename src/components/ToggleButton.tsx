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
    <div
      className={`fixed right-0 top-0 z-20 block transform transition-all duration-300 sm:hidden ${
        togglNav ? "" : ""
      }`}
    >
      {/* <div
        className="flex justify-center items-center cursor-pointer h-[75px] w-[75px] text-3xl"
        onClick={toggle}
      >
        <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
      </div> */}
      <div
        className="relative flex h-[75px] w-[75px] cursor-pointer items-center justify-center text-3xl"
        onClick={toggle}
      >
        <span
          className={`absolute h-[3px] w-6 rounded-sm bg-black transition-all duration-300 ${togglNav ? "opacity-0" : "opacity-1"}`}
        ></span>
        <span
          className={`absolute h-[3px] w-6 -translate-y-2 rounded-sm bg-black transition-all duration-300 ${togglNav ? "translate-y-2 rotate-45" : ""}`}
        ></span>
        <span
          className={`absolute h-[3px] w-6 translate-y-2 rounded-sm bg-black transition-all duration-300 ${togglNav ? "-translate-y-2 -rotate-45" : ""}`}
        ></span>
      </div>
    </div>
  );
}
export default ToggleButton;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
const Processing = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center text-gray-500">
      <div className="mb-2">
        <FontAwesomeIcon
          icon={faCircleNotch}
          className="animate-spin"
        ></FontAwesomeIcon>
      </div>
      <p className="ml-2 font-[Iceberg] text-gray-700">loading...</p>
    </div>
  );
};

export default Processing;

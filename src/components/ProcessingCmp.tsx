import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
const Processing = () => {
  return (
    <div className="text-gray-500 w-full h-full flex flex-col justify-center items-center">
      <div className="mb-2">
        <FontAwesomeIcon icon={faCircleNotch} className="animate-spin"></FontAwesomeIcon>
      </div>
      <p className="text-gray-700 ml-2 font-[Iceberg]">loading...</p>
    </div>    
  )
}

export default Processing
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

const Icon = (props) => {
  return <FontAwesomeIcon className={"th-icon"} {...props} />;
};

export default Icon;


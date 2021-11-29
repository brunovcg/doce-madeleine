import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {fab} from "@fortawesome/free-brands-svg-icons"


library.add(fas)

library.add(fab)





const Icon = (props) => {
  return <FontAwesomeIcon  {...props} />;
};

export default Icon;


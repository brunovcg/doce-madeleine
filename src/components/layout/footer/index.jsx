import Styled from "./styles";
import Icon from "../../Icons"

const Footer = () => {
  return (<Styled>
    <Icon icon={['fab', "instagram"]}/>
    <Icon icon={['fas', "map-marker-alt"]}/>

    <div>
      <p>Doce Madeleine</p>
      <p>Rua Padre Giordano, 213 - Boa Viagem </p>
    </div>

  </Styled>)
};

export default Footer;

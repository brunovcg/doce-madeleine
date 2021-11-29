import Styled from "./styles";
import { Carousel } from "react-bootstrap";
import imgCarousel1 from "../../assets/images/carousel1.jpg";
import imgCarousel2 from "../../assets/images/carousel2.jpg";
import imgCarousel3 from "../../assets/images/carousel3.jpg";

const CarouselComponent = () => {
  const CarouselOptions = [
    {
      label: "Primeira Foto",
      desc: "descrição",
      image: imgCarousel1,
    },
    { label: "Segunda Foto", desc: "descrição", image: imgCarousel2 },
    { label: "Terceira Foto", desc: "descrição", image: imgCarousel3 },
  ];

  return (
    <Styled>
      <Carousel>
        {CarouselOptions.map((item, index) => (
          <Carousel.Item key={index}>
            <div
              className="d-block w-100"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundPosition: "center",
                backgroundSize: "cover",
                height: "400px",
                width: "100%",
              }}
            ></div>

            <Carousel.Caption>
              <div className="label-box">
                <h3>{item.label}</h3>
                <p>{item.desc}</p>
              </div>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </Styled>
  );
};

export default CarouselComponent;

import { Navbar, Container, NavbarBrand } from "react-bootstrap";
import Styled from "./styles";
import imgLogo from "../../assets/images/logo_dm.png";
import { useWindowSize } from "../../providers/windowSize";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const menuOptions = [
    { title: "Produtos", link: "/", icon: "" },
    { title: "Eventos", link: "/", icon: "" },
    { title: "Clientes", link: "/", icon: "" },
    { title: "Contatos", link: "/", icon: "" },
  ];

  const { width } = useWindowSize();
  return (
    <Styled>
      <Navbar bg="light" expand="lg">
        <Container>
          {width > 992 && (
            <div className="menu-box">
              <div className="menu-left">
                {menuOptions
                  .filter((item, index) => index < menuOptions.length / 2)
                  .map((item, index) => (
                    <Link key={index} to={item.link}>
                      {item.title}
                    </Link>
                  ))}
              </div>

              <figure className="figure-menu">
                <img
                  className="img-dm-logo"
                  src={imgLogo}
                  alt="doce_madeleine"
                />
              </figure>
              <div className="menu-right">
                {menuOptions
                  .filter((item, index) => index >= menuOptions.length / 2)
                  .map((item, index) => (
                    <Link key={index} to={item.link}>
                      {item.title}
                    </Link>
                  ))}
              </div>
            </div>
          )}

          {width < 992 && (
            <>
              <NavbarBrand>
                <img
                  className="img-dm-logo-mobile"
                  src={imgLogo}
                  alt="doce_madeleine"
                />
              </NavbarBrand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <div className="mobile-menu">
                  {menuOptions.map((item, index) => (
                    <Link key={index} to={item.link}>
                      <span>{item.title}</span>
                    </Link>
                  ))}
                </div>
              </Navbar.Collapse>{" "}
            </>
          )}
        </Container>
      </Navbar>
    </Styled>
  );
};

export default NavbarComponent;

import styled from "styled-components";

const Styled = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;

  .navbar {
    height: 100%;
    width: 100%;
    padding: 0;

    .container {
      width: 100%;
      max-width: 100%;

      height: 100%;
      padding: 0;
      display: flex;
      justify-content: center;

      @media (max-width: 992px) {
        justify-content: space-between;
      }
    }

    .menu-box {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;

      .menu-left,
      .menu-right {
        width: 45%;
        display: flex;
        justify-content: center;
        align-items: center;

        a {
          margin: 0 35px;
          font-size: 30px;
          color: var(--pink);

          :hover{
            text-decoration: underline 3px var(--orange);
          }

          
        }
      }

      .figure-menu {
        width: 10%;

        .img-dm-logo {
          width: 110px;
          position: relative;
          z-index:6;
         
        
          margin-top: 8px;
        }
      }
    }
    .img-dm-logo-mobile {
      width: 45px;
      margin-left: 15px;
    }

    .navbar-toggler {
      margin-right: 15px;
    }

    #basic-navbar-nav {
      width: 100%;
      z-index:6;
      background-color: white;

      .mobile-menu {
        display: flex;
        flex-direction: column;

        a {
          margin: 20px 0;
          color: var(--pink);
          :hover{
            text-decoration: underline 3px var(--orange);
          }

          span {
            font-size: 30px;
            margin-left: 40px;
          }
        }
      }
    }
  }
`;

export default Styled;

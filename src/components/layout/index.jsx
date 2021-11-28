import Header from "./header";
import Content from "./content";
import Footer from "./footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <Content component={children} />
      <Footer />
    </div>
  );
};

export default Layout;

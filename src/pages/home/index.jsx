import Styled from "./styles"
import Layout from "../../components/layout"
import CarouselComponent from "../../components/carousel"
const Home = () =>{

    return(
        <Styled>
            <Layout>
                <CarouselComponent/>
            </Layout>   
        </Styled>
    )
}

export default Home
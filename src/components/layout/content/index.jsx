import Styled from "./styles"

const Content = ({component})=>{

    return(
        <Styled styled={{minHeight:"80vh"}}>
            {component}
        </Styled>

    )
}

export default Content
import { NavLink } from "react-router-dom"
import { Container, ContentViews, ImageDoc } from "./styles"

const MyInfosInCv = () => {
    return(
        <Container>
            <ContentViews>
                <NavLink to="/"><h2>Curriculo</h2></NavLink>
                <ImageDoc src="/imagens/cv.png" alt="" />
                <ImageDoc src="/imagens/cv2.png" alt="" />
            </ContentViews>
        </Container>
    )
}

export default MyInfosInCv
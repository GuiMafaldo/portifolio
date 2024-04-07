import { Container, ContentAbout, IconsList, ImageMenu, Paragraph, TitleJob, TitleName } from "./styles"

const AboutMe = () => {
    return(
        <Container>
            <ContentAbout>
                <TitleName>Guilherme</TitleName>
                <span>Mafaldo</span>
                <TitleJob>Front-end Developer</TitleJob>
                <Paragraph>Olá Pessoas.  <br /><br /> Estas sao as minhas principais ferramentas de desenvolvimento: <br />
                    <IconsList src="/imagens/js.svg" alt="" />
                    <IconsList src="/imagens/ts.svg" alt="" />
                    <IconsList src="/imagens/react.svg" alt="" />
                    <IconsList src="/imagens/html.svg" alt="" />
                    <IconsList src="/imagens/css.svg" alt="" />
                    <IconsList src="/imagens/stc.svg" alt="" />
                    <IconsList src="/imagens/vue.svg" alt="" />
                </Paragraph>
            </ContentAbout>
            <ImageMenu src="/imagens/newImage3.jpg" alt="" />
        </Container>

    )
}

export default AboutMe
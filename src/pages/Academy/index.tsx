import { NavLink } from "react-router-dom"
import { CardGridLayout, Container, DescriptionText, LogoAndImage, TitleFormacao, TitleNames } from "./styles"

const AcademyTraining = () => {
    return(
        <Container>
            <div>
                <NavLink to="/">
                <LogoAndImage src="/imagens/logoTentativa.png" alt="" /></NavLink>
                <h2>Formações</h2>
            </div>
            <CardGridLayout>
                <div>
                    <TitleNames>EBAC - Escola britanica de Artes criativas e tecnologia</TitleNames>
                    <LogoAndImage src="/imagens/ebac.svg" alt="" />
                </div>
                <div>
                    <TitleFormacao>Desenvolvedor Front-End</TitleFormacao>
                    <DescriptionText>A formação Front-End da EBAC oferece um currículo completo voltado para o desenvolvimento de interfaces web modernas e responsivas. 
                        Os alunos aprendem HTML, CSS, JavaScript e frameworks como React e Vue.js, além de explorarem conceitos de UX/UI e boas práticas de design. 
                        Com projetos práticos e mentoria especializada, essa formação capacita profissionais para atuarem no mercado de desenvolvimento front-end 
                        com destaque e competência.</DescriptionText>
                </div>
            </CardGridLayout>
            <CardGridLayout>
                <div>
                    <TitleNames>Alura</TitleNames>
                    <br />
                    <LogoAndImage src="/imagens/logo-alura.svg" alt="" />
                </div>
                <div>
                    <TitleFormacao>Desenvolvedor Front-End</TitleFormacao>
                    <DescriptionText>A formação Front-End da Alura oferece um conjunto abrangente de cursos que capacitam 
                        os alunos a dominarem habilidades essenciais para o desenvolvimento de interfaces web interativas e 
                        responsivas. Com uma abordagem prática e atualizada, os cursos abrangem HTML, CSS, JavaScript, 
                        frameworks populares como React e Angular, além de ferramentas de desenvolvimento e boas práticas 
                        de UX/UI. Ideal para iniciantes e profissionais que desejam aprimorar suas habilidades na área de 
                        front-end.</DescriptionText>
                </div>
            </CardGridLayout>
            <CardGridLayout>
                <div>
                    <TitleNames>EBAC - Escola britanica de Artes criativas e tecnologia</TitleNames>
                    <LogoAndImage src="/imagens/ebac.svg" alt="" />
                </div>
                <div>
                    <TitleFormacao>Desenvolvedor FullStack Python</TitleFormacao>
                    <DescriptionText>O curso de Desenvolvedor Full Stack Python da EBAC oferece uma abordagem abrangente, 
                        capacitando os alunos a dominarem tanto o front-end quanto o back-end utilizando Python. 
                        Com foco em projetos práticos e atualização constante das tecnologias mais recentes, 
                        os participantes adquirem habilidades essenciais para desenvolver aplicações web completas e 
                        funcionais.</DescriptionText>
                        <p>Status: <span>Cursando...</span></p>
                </div>
            </CardGridLayout>
        </Container>
    )
}

export default AcademyTraining
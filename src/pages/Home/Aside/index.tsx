import { AsideBar, BarraLateral, Container, LogoAside } from "./styles"

const SideBar = () => {
    return(
        <Container>
            <BarraLateral>
                <AsideBar>
                    <a target="_blank" href="https://www.linkedin.com/in/guimafaldo/" rel="noreferrer">
                        <LogoAside src="/imagens/linke.svg" alt="" />
                    </a>
                    <a target="_blank" href="https://github.com/GuiMafaldo" rel="noreferrer">
                        <LogoAside src="/imagens/github.svg" alt="" />
                    </a>
                    <a target="_blank" href="https://www.instagram.com/mafaldo.gui/" rel="noreferrer">
                        <LogoAside src="/imagens/insta.svg" alt="" />
                    </a>
                </AsideBar>
            </BarraLateral>
        </Container>
    )
}

export default SideBar
import AboutMe from "./About"
import SideBar from "./Aside"
import { NavLink } from 'react-router-dom'

import { HeaderHome, LogoIcons, LogoImage, LogoSecondary, MenuFirstItems, MenuNavBar, MenuSecondaryItems, SelectConfigs } from "./styles"

const HomePage = () => {
    return(
        <>
            <HeaderHome>
                <MenuNavBar>
                    <LogoImage src="/imagens/logoTentativa.png" alt="" />
                    <MenuFirstItems>
                        <a href="https://mail.google.com/">
                            <LogoIcons src="/imagens/gmail.svg" alt="" />
                        </a>
                        <a href="https://web.whatsapp.com/">
                            <LogoIcons src="/imagens/wats.svg" alt="" />
                        </a>
                        <SelectConfigs>
                            <option value="empty"> Formas de contato</option>
                            <option value="email">03.09gui.mafaldo@gmail.com</option>
                            <option value="wts">(11)94923-4824</option>
                        </SelectConfigs>
                    </MenuFirstItems>
                </MenuNavBar>
                <MenuSecondaryItems>
                    <LogoSecondary src="/imagens/projetos.png" alt="" />
                    <NavLink className="redirect" to="/works">Works</NavLink>
                    <LogoSecondary src="/imagens/man.png" alt="" />
                    <NavLink className="redirect" to="/cv">View Cv</NavLink>
                    <LogoSecondary src="/imagens/book.png" alt="" />
                    <NavLink className="redirect" to="/academy">Formação</NavLink>
                </MenuSecondaryItems>
            </HeaderHome>
            <AboutMe />
            <SideBar />
        </>
    )
}

export default HomePage
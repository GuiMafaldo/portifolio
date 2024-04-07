import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`
export const BarraLateral = styled.aside`
    display: flex;
    max-width: 120px;
    width: 100%;
    margin-top: -180px;

    @media (min-width: 768px) and (max-width: 1024px){
        margin-top: -280px;
    }
`
export const AsideBar = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;


    @media (max-width: 767px) {
        display: flex;
        flex-direction: row;
        margin-left: 190px;
        margin-top: 100px;
    }
`
export const LogoAside = styled.img`
    width: 40px;

    @media(max-width: 767px) {
        width: 30px;
    }
`
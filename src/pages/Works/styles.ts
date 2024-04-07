import styled from "styled-components"

export const CabecalhoSection = styled.div`
    max-width: 1440px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    h2 {
        font-family: helvetica;
        font-weight: 900;
        font-size: 26px;
    }

    @media (max-width: 767px) {
        display: block;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        display: block;
    }
`
export const Container = styled.div`
    margin: 0 auto;
    max-width: 1440px;
    width: 100%;
    text-align: center;
`
export const ContainerList = styled.div`
    max-width: 1440px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;


    @media (max-width: 767px) {
        display: block;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        display: grid;
        grid-template-columns: 1fr 1fr;
        padding-bottom: 40px;
    }
`
export const ImagemCabecalho = styled.img`
    width: 350px;
    cursor: pointer;

    @media (max-width: 767px) {
        width: 200px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        width: 250px;
    }
`
export const GeralFunctions = styled.div`
    span {
        font-family: Righteous;
        font: 600;
    }

    button {
        padding: 8px;
        background-color: #696969;
        color: #fff;
        border-radius: 8px;
        margin: 20px 10px 80px 0;
    }

`
export const TitleProjects = styled.h4`
    font-family: Righteous;
    font-size: 20px;
    font-weight: 900;
`
export const DescriptionProjects = styled.p`
    font-family: Righteous;
    font-size: 16px;
    font-weight: 600;
`
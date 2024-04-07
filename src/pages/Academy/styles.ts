import styled from "styled-components";
export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 60px;

    h2 {
        text-align: center;
        font-family: Righteous;
        font-size: 36px;
        // margin-top: 30px;
    }

    @media (max-width: 767px) {
        text-align: center;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        text-align: center;
        padding-bottom: 60px;
    }
`
export const CardGridLayout = styled.div`
    max-width: 840px;
    width: 100%;
    margin: 160px auto 0 auto;
    background-color: #898696;
    padding: 40px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    text-align: center;
    align-items: center;
    border-radius: 20px;
    box-shadow: 3px 3px 3px;

    @media (max-width: 767px) {
        display: block;
        width: 70%;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        display: block;
        width: 80%;
    }
`
export const LogoAndImage = styled.img`
    width: 220px;

    @media (max-width: 767px) {
        margin-bottom: 20px;
    }
`
export const TitleNames = styled.h3`
    font-family: Righteous;
    font-weight: 600;
    color: #000;
    letter-spacing: 1px;
    margin-bottom: 0;

`
export const TitleFormacao = styled.span`
    font-family: Righteous;
    font-weight: 600;
    font-size: 18px;
    letter-spacing: 1px;
`
export const DescriptionText = styled.p`
    margin-left: 16px;
    margin-top: 20px;
    font-family: sans-serif;
    font-weight:500;
    text-align: left;
    color: #fffffa;

`
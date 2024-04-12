import styled from "styled-components";

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;

    @media (max-width: 767px) {
        display: flex;

    @media (min-width: 768px) and (max-width: 1024px){
        display: flex;
    }
`
export const ContentAbout = styled.div`
    margin-top: 120px;


    span {
        font-size: 40px;
        font-family: Righteous;
        font-weight: bold;
        margin-left: 60px;


        @media (max-width: 767px) {
            font-size: 28px;
            margin: 0 auto;
            margin-left: 20px;
        }
    }
    @media (min-width: 420px) and (max-width: 767px) {
        display: grid;
        grid-template-columns: 1fr ;
        margin: 0 auto;
        margin-top: 60px;
        margin-left: 40px;
        
        span {
            margin-left: 40px;
        }
    }
    }
    @media (min-width: 768px) and (max-width: 1024px){
        display: grid;
        grid-template-columns: 1fr;
        margin: 0 auto;
        margin-top: 80px;
    }
`
export const TitleName = styled.h2`
    font-size: 40px;
    font-family: Righteous;
    font-weight: bold;
    margin: 0 auto;
    color: #696969;

    @media (max-width: 767px) {
        margin: 0;
        margin-left: 10px;
        font-size: 28px;
    }
`
export const TitleJob = styled.h4`
    font-family: Righteous;
    font-size: 24px;

    @media (max-width: 767px) {
        margin-left: 20px;
        margin-top: 10px;
        font-size: 16px;
    }

`
export const Paragraph = styled.p`
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 500;
    max-width: 300px;
    display: inline-block;

    @media (max-width: 767px) {
        margin: 0 auto;
        margin-left: 10px;
        font-size: 14px;
    }
`
export const ImageMenu = styled.img`
    width: 300px;
    margin-left: 120px;
    margin-top: 60px;
    border-radius: 200px;


    @media (max-width: 767px) {
        width: 160px;
        margin-left: 40px;
        margin-top: 40px;
        margin-right: 20px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        margin-left: 20px;
        width: 240px;
        margin-right: 30px;
    }
`
export const IconsList = styled.img`
    width: 40px;
    margin-top: 10px;

    @media (max-width: 767px) {
        width: 26px;
    }
`


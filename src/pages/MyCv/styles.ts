import styled from "styled-components";

export const Container = styled.div`
    max-width: 1440px;
    width: 100%;
    margin: 0 auto;
`
export const ContentViews = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;

    h2 {
        font-family: Helvetica;
        font-size: 48px;
        color: #696969;
        text-decoration: underline;

        @media (max-width: 767px) {
            font-size: 28px;
        }
        @media (min-width: 768px) and (max-width: 1024px){
            font-size: 42px;
        }
    }

    a {
        text-decoration: none;
    }

`
export const ImageDoc = styled.img`
    height: 160vh;
    width: 960px;
    margin: 0 auto;
    margin-bottom: -60px;


    @media (max-width: 767px) {
        width: 90vw;
    }

    @media (min-width: 768px) and (max-width: 1024px){
        width: 90vw;
    }
`
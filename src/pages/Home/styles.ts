import styled from "styled-components";

export const HeaderHome = styled.div`
    max-width: 1620px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 767px) {
        display: block;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        display: block;
    }
`
export const MenuNavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 768px) and (max-width: 1024px){
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
`
export const MenuFirstItems = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
`
export const MenuSecondaryItems = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    .redirect {
        color:#696969;
        font-weight: bold;
        font-size: 22px;
        text-decoration: none;


        @media (max-width: 767px) {
            font-size: 15px;
    }

    :hover {
        color: #000;
        transition: all ease 0.5ms;
        text-decoration: underlerline;
        }
        @media (min-width: 768px) and (max-width: 1024px){
            display: flex;
            align-items: center;
            justify-content: space-around;
        }
        

`
export const LogoImage = styled.img`
    width: 220px;
    margin-right: 60px;

    @media (max-width: 767px) {
        width: 100px;
        margin-right: 10px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        width: 160px;
    }
`
export const LogoIcons = styled.img`
    width: 30px;

    @media (max-width: 767px) {
        display: none;
    }
`
export const LogoSecondary = styled.img`
    width: 30px;
    height: 30px;

    @media (max-width: 767px) {
        width: 20px;
        height: 20px;
        margin-left: 12px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        width: 30px;
        height: 30px;
        margin-left: 78px;
    }
`
export const SelectConfigs = styled.select`
    padding: 6px;
    border-radius: 4px;
    background-color: #e9e9e9;
    font-family: helvetica;
    font-weight: bold;
    color: #696969;
    font-size: 18px;
    border: none;

    @media (max-width: 767px) {
        width: 220px;
        margin-left: -50px;
    }
`

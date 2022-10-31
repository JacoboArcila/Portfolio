import styled from "styled-components";

export const ContainerEducation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 30px 0;

    @media (max-width: 768px) {
        flex-wrap: wrap;
        justify-content: center;
    }
`

export const ContainerText = styled.div`
    border: 1px solid ${({theme}) => theme.education};
    height: 250px;
    margin-left: 60px;
    @media (max-width: 768px) {
        margin: 0 auto;
    }
`

export const Img = styled.img`
    border-radius: 50%;
    @media (max-width: 768px) {
        width: 180px;
        height: 180px;
        margin-bottom: 10px;
    }
`

export const H1 = styled.h1`
    background-color: ${({theme}) => theme.education};
    padding: 15px;
    text-align: center;
    color: black;
`

export const ContainerP = styled.div`
    margin-top: 20px;
    padding: 15px;
`

export const Button = styled.button`
    padding: 10px 50px;
    background-color: ${({theme}) => theme.education};
    border: none;
    color: black;
    margin: 25px auto;
    display: flex;
    justify-content: center;

    &:hover {
        cursor: pointer;
    }
`
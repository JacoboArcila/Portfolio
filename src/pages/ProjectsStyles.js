import styled from "styled-components";

export const ContainerProjects = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    
`

export const Input = styled.input`
    padding: 20px 80px;
    border: 1px solid ${({theme}) => theme.projects};
`

export const Title = styled.h1`
    display: block;
    margin: 30px 0;
    @media (max-width: 768px) {
        margin-top: 10px;
    }
`

export const Button = styled.button`
    border: 1px solid ${({theme}) => theme.projects};
    margin-left: 10px;
    
    
    svg {
    }

    &:hover {
        cursor: pointer;
    }
`
export const Container = styled.div`
`

export const ContainerCard = styled.div`
    display: flex;
    justify-content: center;
`
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Input = styled.input`
    padding: 20px 80px;
    border: 1px solid ${({theme}) => theme.projects};
`

export const Title = styled.h1`
    display: block;
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

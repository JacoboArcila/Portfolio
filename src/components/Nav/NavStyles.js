import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;

    @media(min-width: 768px) {
        position: initial;
        margin: 0;
    }

`

export const Button = styled.button`
    padding: 10px 30px;
    color: white;
    font-size: 20px;
    border: 1px solid ${({color, theme}) => color ? color : theme.home};
    border-radius: 5px;
    margin: 0 20px;
    background-image: -webkit-linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 400ms ease-in-out;

    &:hover {
        background-position: 0;
        cursor: pointer;
    }
`
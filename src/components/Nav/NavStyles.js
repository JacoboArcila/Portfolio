import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;
    
    .active {
        color: red;
        display: block !important;
        width: 100%;
        position: absolute;
        margin: 0 100px;
        top: 30%;
        left: 0;
        right: 0;
        text-align: center;
    }

    .containerButton {
        @media(max-width: 768px) {
            border: 1px solid red;
            display: none;
        }
    }

`

export const Button = styled.button`
    display: block;
    padding: 10px 30px;
    font-size: 20px;
    border: 1px solid ${({color, theme}) => color ? color : theme.home};
    border-radius: 5px;
    margin: 0 auto;
    background-image: -webkit-linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    transition: background 400ms ease-in-out;

    @media(min-width: 768px) {
        margin: 0 10px;
        position: initial;
        display: inline;
    }

    &:hover {
        background-position: 0;
        cursor: pointer;
    }
`
import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;


    @media(max-width: 768px) {
        .title{
            z-index: 2;
            font-size: 20px ;
        }
    }
    
    .active {
        display: block !important;
        width: 100%;
        position: absolute;
        margin: 0 auto;
        top: 11% !important;
        left: 0px;
        right: 0;
        text-align: center;
        transition: all .8s ease;
    }

    .containerButton {
        @media(max-width: 768px) {
            /* display: none; */
            transition: all .8s ease;
            width: 100%;
            position: absolute;
            top: -100%;
            left: 0px;
            text-align: center;
            z-index: 0;
        }
    }

`

export const Button = styled.button`
    display: block;
    padding: 10px 30px;
    font-size: 20px;
    border: 1px solid ${({color, theme}) => color ? color : theme.home};
    border-radius: 5px;
    margin: 10px auto;
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
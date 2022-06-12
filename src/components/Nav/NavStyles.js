import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 50px;

    @media(max-width: 768px) {
        transition: all .8s ease;
        .title{
            z-index: 2;
            font-size: 20px ;
        }
    }

    &.activeCompo {
        margin-bottom: 360px;
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
        overflow: hidden;
    }

    .containerButton {
        @media(max-width: 768px) {
            transition: all .8s ease;
            width: 100%;
            position: absolute;
            top: -100%;
            left: 0px;
            text-align: center;
            z-index: 0;
        }
    }
    
    .link {
        text-decoration: none;
    }

`

export const Button = styled.button`
    width: 170px;
    display: block;
    padding: 10px 30px;
    font-size: 20px;
    border: none;
    border-bottom: 2px solid ${({color, theme}) => color ? color : theme.home};
    border-radius: 5px;
    margin: 0 auto;
    background-image: -webkit-linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-image: linear-gradient(45deg, ${({color, theme}) => color ? color : theme.home} 50%, transparent 50%);
    background-position: 100%;
    background-size: 400%;
    -webkit-transition: background 300ms ease-in-out;
    -webkit-box-shadow: 0px 0px 17px -4px ${({color, theme}) => color ? color : theme.home};
    -moz-box-shadow: 0px 0px 17px -4px ${({color, theme}) => color ? color : theme.home};
    box-shadow: 0px 0px 17px -4px ${({color, theme}) => color ? color : theme.home};
    transition: background 400ms ease-in-out;

    @media(min-width: 768px) {
        margin: 2px 10px;
        position: initial;
        display: inline;
    }

    @media(max-width: 768px) {
        margin: 30px auto;
        width: 300px;
    }


    &:hover {
        background-position: 0;
        cursor: pointer;
    }
`
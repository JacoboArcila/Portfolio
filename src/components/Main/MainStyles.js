import styled from 'styled-components';

export const Container = styled.div`

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        hr {
            height: 300px;
            border-color: ${({theme}) => theme.home};
            margin: 0 20px;
        }

        h1, p {
            margin: 0 40px;
        }

        .hello {
            font-size: 48px;
        }
        .text {
            font-size: 32px;
        }

        .text span {
            color: ${({theme}) => theme.home};
        }
    }

`

export const DivKnowMe = styled.div`
    @media(min-width: 768px) {
        .titleKnow {
            text-align: center;
            font-size: 40px;
        }
    }
`

export const DivGet = styled.div`
    @media(min-width: 768px) {
        border: 1px solid red;
        margin: 30px 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        hr {
            height: 300px;
            border-color: ${({theme}) => theme.home};
            margin: 0 20px;
        }
    }
`
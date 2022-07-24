import styled from 'styled-components';

export const Container = styled.div`

    @media(min-width: 768px) {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 50px;

        hr {
            height: 300px;
            border-color: ${({theme}) => theme.home};
            margin: 0px 20px;
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
            margin-bottom: 60px;
        }
    }
`

export const DivGet = styled.div`
    @media(min-width: 768px) {
        margin: 30px 50px;
        display: flex;
        justify-content: space-evenly;
        align-items: center;

        hr {
            height: 300px;
            border-color: ${({theme}) => theme.home};
            margin: 0 70px;
        }

        .text {
            font-size: 24px;
            margin-bottom: 80px;
        }

        .language {
            font-size: 32px;

            img {
                width: 30px;
                height: 30px;
            }
        }
    }
`
import styled from 'styled-components';

export const ContainerFooter = styled.div`
    background-color: ${({theme}) => theme.footer};
    display: flex;
    justify-content: space-evenly;
    padding: 40px;
    
    h5 {
        background-color: ${({theme}) => theme.footer};
        font-size: 24px;
    }

    .containerIcons {
        background-color: ${({theme}) => theme.footer};
    }

    svg {
        background-color: ${({theme}) => theme.footer};
        width: 42px;
        height: 42px;
        margin: 0 30px;
    }

    @media (max-width: 768px) {
        h5 {
            background-color: ${({theme}) => theme.footer};
            font-size: 18px;
            width: 100px;
        }
        svg {
            width: 22px;
            height: 32px;
            margin: 0 5px;
        }
    }
    

`
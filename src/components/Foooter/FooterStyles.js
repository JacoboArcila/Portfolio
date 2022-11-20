import styled from 'styled-components';

export const ContainerFooter = styled.div`
    background-color: #141414;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 40px;
    
    h5 {
        background-color: #141414;
        font-size: 24px;
        color: white;
    }

    .containerIcons {
        background-color: #141414;
    }

    svg {
        background-color: #141414;
        width: 42px;
        height: 42px;
        margin: 0 30px;
    }

    @media (max-width: 768px) {
        flex-direction: column;
        gap: 50px;
        h5 {
        }
        svg {
            width: 22px;
            height: 32px;
            margin: 0 5px;
        }
    }
    

`
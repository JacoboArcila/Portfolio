import styled from 'styled-components';

export const BurguerDiv = styled.div`
    @media(min-width: 768px) {
        display: none;
    }

 
    @media(max-width: 768px) {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: white;
        border-radius: 50%;
        width: 50px;
        height: 50px;
    }
   
    
`
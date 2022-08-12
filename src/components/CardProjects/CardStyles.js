import styled from "styled-components";

export const Container = styled.div`
  border-bottom: 2px solid ${({theme}) => theme.home};
  background-color: #022130;
  display: flex;
  width: 400px;
  height: 500px;
  flex-wrap: wrap;
  padding: 10px 20px;
  margin: 20px 0;
  border-radius: 10px;

  @media (max-width: 768px) {
    width: 300px;
    height: 400px;

    .descripcion {
      font-size: 15px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  h2 {
    margin: 0 auto;
  }
`;

export const Made = styled.div`
  display: block;
  p {
    margin: 15px 5px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 15px;
      margin: 10px 5px;
    }
  }
`

export const Languages = styled.div`
  display: inline;
`

export const Icon = styled.h3`
  display: inline;
  margin: 10px 5px;
  background-color: black;
  padding: 5px 10px;
  @media (max-width: 768px) {
    padding: 2px 5px;
    font-size: 15px;
  }
`

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  cursor: pointer;
  padding: 10px 20px;
  background-color: ${({theme}) => theme.projects};
  margin: 0 50px;
`
 

export const ImgCard = styled.img`
  width: 400px;
  height: 200px;

  @media (max-width: 768px) {
    width: 300px;
    height: 150px;
  }
`
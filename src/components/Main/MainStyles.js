import styled from "styled-components";

export const DivTitle = styled.div`
  .title-front {
    color: black;
  }

  h1 {
    font-size: 100px;
  }
`

export const Container = styled.div`
  /* background-color: white;
  color: black; */
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;

    hr {
      width: 400px;
      border-color: ${({ theme }) => theme.home};
      margin: 20px 20px;
    }

    .hello {
      margin-top: 30px;
      text-align: center;
    }

    .text {
      margin-top: 20px;
      text-align: center;
      width: 300px;
    }
  }

  @media (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: -40px;

    hr {
      height: 300px;
      border-color: ${({ theme }) => theme.home};
      margin: 0px 20px;
    }

    h1,
    p {
      margin: 0 40px;
    }

    .hello {
      font-size: 48px;
    }
    .text {
      font-size: 28px;
    }

    .text span {
      color: ${({ theme }) => theme.home};
    }
  }
`;

export const DivKnowMe = styled.div`
  @media (max-width: 768px) {
   /*  display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
 */
  /*   .titleKnow {
      text-align: center;
      font-size: 30px;
      margin: 30px 0;
    } */

    

    hr {
      width: 300px;
      border-color: ${({ theme }) => theme.home};
      margin: 40px auto;
    }

    .textBio {
      width: 300px;
      text-align: left;
      margin: 10px auto;
    }

    .language {
      text-align: center;
      margin: 10px auto;
    }

    .language img {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }

    .containerIcons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      margin: 10px 30px;
      gap: 10px;
    }
  }
`;

export const DivGet = styled.div`
  img {
    width: 45px;
    height: 45px;
    margin-left: 5px;
  }

  @media (min-width: 768px) {
    margin: 30px 50px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

    hr {
      height: 300px;
      border-color: ${({ theme }) => theme.home};
      margin: 0 70px;
    }
    img {
      width: 45px;
      height: 45px;
      margin-left: 5px;
    }

    .text {
      font-size: 24px;
      margin-bottom: 80px;
    }

    .language {
      font-size: 32px;
    }
  }
`;

import styled from "styled-components";

export const ContainerCardNeon = styled.div`
  background-color: transparent;
  border: 4px solid #441cf2;
  box-shadow: inset 0px 0px 28px 0px rgba(234, 247, 52, 1);
  -webkit-box-shadow: 0px 0px 37px 0px rgba(68, 28, 242, 1);
  -moz-box-shadow: 0px 0px 37px 0px rgba(68, 28, 242, 1);
  box-shadow: 0px 0px 37px 0px rgba(68, 28, 242, 1);
  border-radius: 10px;
  width: 300px;
  height: 450px;
  padding: 5px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  margin-bottom: 30px;

  .card-title {
    color: #0d0df7;
    text-shadow: 0px 0px 23px #0d0df7;
    font-size: 22px;
  }

  .card-img img {
    width: 100%;
    height: 150px;
  }

  .card-body p {
    color: white;
  }

  .card-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }

  .card-button {
    border: 2px solid #1cf2d2;
    color: #1cf2d2;
    padding: 10px 20px;
    font-size: 20px;
    background-color: transparent;
    margin-top: 20px;
    margin-bottom: -20px;
    cursor: pointer;
    -webkit-box-shadow: 0px 0px 13px 0px rgba(28, 242, 210, 1);
    -moz-box-shadow: 0px 0px 13px 0px rgba(28, 242, 210, 1);
    box-shadow: 0px 0px 13px 0px rgba(28, 242, 210, 1);
    transition: all 0.2s ease-in-out;
    font-weight: bold;
  }

  .card-button:hover {
    -webkit-box-shadow: 0px 0px 24px 0px rgba(28, 242, 210, 1);
    -moz-box-shadow: 0px 0px 24px 0px rgba(28, 242, 210, 1);
    box-shadow: 0px 0px 24px 0px rgba(28, 242, 210, 1);
    background-color: #1cf2d2;
    color: black;
    scale: 1.1;
  }
`;

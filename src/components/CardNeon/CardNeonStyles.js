import styled from "styled-components";

export const ContainerCardNeon = styled.div`
    background-color: transparent;
    border: 4px solid #EBF734;
    box-shadow: inset 0px 0px 28px 0px rgba(234,247,52,1);
    box-shadow: 0px 0px 28px 0px rgba(234,247,52,1);
    border-radius: 10px;
    width: 300px;
    height: 400px;
    padding: 5px 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    margin-bottom: 30px;

    .card-title {
        color: #0D0DF7;
        text-shadow: 0px 0px 23px #0D0DF7;
        font-size: 22px;
    }

    .card-img img {
        width: 100%;
        height: 150px;
    }

    .card-body p {
        color: white;
    }
`

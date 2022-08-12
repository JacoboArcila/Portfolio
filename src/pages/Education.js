import React from "react";
import EducationCard from "../components/EducationCard/EducationCard";
import ImgEducation from "../img/ImgEducation";
import styled from "styled-components";

const Education = () => {
  return (
    <div>
      <ContainerMain>
        {/* <ImgEducation /> */}
        <DivText>
          <H1>Education</H1>
        </DivText>
      </ContainerMain>
      <Hr />
      <EducationCard />
      <EducationCard />
    </div>
  );
};

const ContainerMain = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;

const DivText = styled.div`
  margin: 0 auto;

  @media (max-width: 768px) {
    margin: 0;
  }
`;

const H1 = styled.h1`
  text-align: center;
  margin: 50px 0;
  @media (max-width: 768px) {
    margin-bottom: 50px;
    text-align: center;
  }
`;

const Hr = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  border-color: ${({ theme }) => theme.education};
`;

export default Education;

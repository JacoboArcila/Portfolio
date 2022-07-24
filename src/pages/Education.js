import React from "react";
import EducationCard from "../components/EducationCard/EducationCard";
import ImgEducation from "../img/ImgEducation";
import styled from "styled-components";

const Education = () => {
  return (
    <div>
      <ContainerMain>
        <ImgEducation />
        <DivText>
          <H1>Education</H1>
          <P>
            Lorem Ipsum is simply dummy text of the <br /> printing and
            typesetting industry.{" "}
          </P>
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
  justify-content: space-between;
  align-items: center;
`;

const DivText = styled.div`
  margin-right: 100px;
`;

const H1 = styled.h1`
  margin-bottom: 280px;
`;

const P = styled.p`
  margin-top: -200px;
`;

const Hr = styled.hr`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 500px;
  border-color: ${({theme}) => theme.education};
`;

export default Education;

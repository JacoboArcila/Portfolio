import React from "react";
import ImgProjects from "../../img/ImgProjects";
import { Container, Input, Title, Button } from "./MainProjectsStyles";

const MainProjects = () => {
  return (
    <Container>
      <div>
        <Title>Projects</Title>
        <div>
          <Input type="text" placeholder="Search..." />
          <Button>
            <svg
              width={38}
              height={37}
              viewBox="0 0 38 37"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.0658 35.1519L25.6522 23.7916C27.8369 21.2919 29.1641 18.0403 29.1641 14.4839C29.1641 6.61903 22.7732 0.258064 14.8715 0.258064C6.96969 0.258064 0.578857 6.61903 0.578857 14.4839C0.578857 22.3487 6.96969 28.7097 14.8715 28.7097C18.4446 28.7097 21.7115 27.3887 24.2229 25.2345L35.6366 36.5948L37.0658 35.1519ZM14.8715 26.6774C8.1131 26.6774 2.62066 21.2106 2.62066 14.4839C2.62066 7.7571 8.1131 2.29032 14.8715 2.29032C21.6298 2.29032 27.1223 7.7571 27.1223 14.4839C27.1223 21.2106 21.6298 26.6774 14.8715 26.6774Z"
                fill="white"
              />
            </svg>
          </Button>
        </div>
      </div>
      <ImgProjects />
    </Container>
  );
};

export default MainProjects;

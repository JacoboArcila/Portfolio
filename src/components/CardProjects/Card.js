import React from "react";
import {Container, Made, Languages, Icon} from "./CardStyles";

const Card = () => {
  return (
    <Container>
      <h2>Rick and class</h2>
      <Made>
      <p>This project is made with:</p>
        <Languages>
          <Icon>Html</Icon>
          <Icon>React</Icon>
          <Icon>Css</Icon>
          <Icon>Js</Icon>
        </Languages>  
      </Made>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum
      </p>

    </Container>
  );
};

export default Card;

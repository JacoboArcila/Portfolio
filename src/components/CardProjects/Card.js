import React from "react";
import {
  Container,
  Made,
  Languages,
  Icon,
  Button,
  ImgCard,
} from "./CardStyles";

const Card = () => {
  return (
    <Container>
      <h2>Rick and class</h2>
      <ImgCard
        src="https://sergioescriba.com/wp-content/uploads/2019/01/tipos-clasificacion-paginas-web.png"
        alt="pagina"
      />
      <Made>
        <p>This project is made with:</p>
        <Languages>
          <Icon>Html</Icon>
          <Icon>React</Icon>
          <Icon>Css</Icon>
          <Icon>Js</Icon>
        </Languages>
      </Made>
      <p className="descripcion">
        Este proyecto tiene como finalidad
        flkjdsafjhdskjafhdklsjahfkdajshfkd
        lsajfhdsuafhoiuahefijuhasdkljfhkasljdhf
      </p>
      <div className="buttons">
        <Button>GitHub</Button>
        <Button>Page</Button>
      </div>
    </Container>
  );
};

export default Card;

import React from "react";
import { ContainerCardNeon } from "./CardNeonStyles";
import "./CardNeonStyles.scss";

const CardNeon = () => {
  return (
    <div className="containerAllNeon">
      <ContainerCardNeon>
        <div>
          
        </div>
        <div className="card-img">
          <img
            src="https://www.comparapps.com/wp-content/uploads/2019/08/Como-Crear-Una-Pagina-Web.jpg"
            alt="web"
          />
        </div>
        <div className="card-body">
          <p>
            Proident consequat officia amet enim velit. Esse non anim sunt irure
            duis do dolore nisi. Excepteur consectetur et qui laboris veniam
            consequat ex elit laboris Lorem nostrud incididunt ullamco mollit.
          </p>
        </div>
        <div className="card-links">
          <button className="card-button">GitHub</button>
          <button className="card-button">Page</button>
        </div>
      </ContainerCardNeon>
    </div>
  );
};

export default CardNeon;

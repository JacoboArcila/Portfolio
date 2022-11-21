import React from "react";
import { ContainerCardNeon } from "./CardNeonStyles";
import "./CardNeonStyles.scss";

const CardNeon = ({card}) => {
  return (
    <div className="containerAllNeon">
      <ContainerCardNeon>
        <div className="card-title">
          <h2>{card.title}</h2>
        </div>
        <div className="card-img">
          <img
            src={card.img}
            alt="web"
          />
        </div>
        <div className="card-body">
          <p>
            {card.info}
          </p>
        </div>
        <div className="card-links">
        <a href={card.github}><button className="card-button">GitHub</button></a>
        <a href={card.page}> <button className="card-button">Page</button></a>
        </div>
      </ContainerCardNeon>
    </div>
  );
};

export default CardNeon;

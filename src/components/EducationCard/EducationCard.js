import React from "react";
import { ContainerEducation, ContainerText, Img, H1, ContainerP, Button } from "./EducationCardStyles";

const EducationCard = () => {
  return (
    <ContainerEducation>
      <div>
        <Img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOAAAADgCAMAAAAt85rTAAAAaVBMVEUBAQH///8AAABaWlpJSUn6+voeHh7o6OhCQkL19fUzMzOioqK5ubkFBQX8/Pzt7e1WVlbDw8NOTk4nJyeEhITe3t6RkZHQ0NAWFhYuLi5fX1+ZmZkbGxuKioo7OzvX19esrKxqamp0dHSgZee8AAACl0lEQVR4nO3d0VbaQBRG4TkHAihmAohStSL6/g/ZCb1wAQlo01b/s/a+xMTMtwYSSbJiWi9GoUsLj10aee0pciOP7QMoH0D1AKoHUD2A6gFUD6B6ANUDqB5A9QCqB1A9gOoBVA+gegDVA6geQPUAqgdQPYDqAVQPoHoA1QOoHkD1AKoHUD2A6gFUD6B6ANUDqB5A9QCqB1A9gOoBVA+gegDVA6geQPUAqvdVwP+21eHA/ofSFUX92ZVOfsfQBgPPD3AocLhwINBrv7vqqVneT7pHWeCWq0vlym6/HFjGOrUzbRYFc/r0RPdzK703+e7Aymz5o8zy8TbUgKOH69O2j/M7s2zV+HQO1YCzvl3EeGM52+kjPvWAXT9Jqbw312VvYtfHGwkBTL8PBqvyOWyO96RRgPvDyKh8DudHB8Q4wHYSn4rwZ9QZ3AvLEvPAwNqfLTeHm4kE3GuybeMCPfmL2TousCyyM9sFBiafm90ABPhnAbwQwAQQ4KAAXghgu0zwP9XcN2bPcYG1e5VtFReY/NWsivuF1739OngTFlh8b9YuUR++GgXotU/KJ3AZ9Lzo/vT91HI+HmgQYF12oNvGsr2GPHW/n76n9tLEvfzFl4fuy9ePu1ymz9bql89ynnbUlH1LW7PQvgCa2p1I9+jal6u5+iXs5E3f6PLV8q3nVgmvPwb8BjchJJ+Nu5vd9t5HUt60q561Dlr9hX/++I/vkzl3gPxIw8bWxr1q6gFUD6B6ANUDqB5A9QCqB1A9gOoBVA+gegDVA6geQPUAqgdQPYDqAVQPoHoA1QOoHkD1AKoHUD2A6gFUD6B6ANUDqB5A9QCqB1A9gOoBVA+gegDVA6geQPUAqgdQPYDqAVQPoHoA1QOoXnTgL8vDJcKPH/oNAAAAAElFTkSuQmCC"
          alt="digitalhouse"
        />
      </div>
      <ContainerText>
        <H1>Digital House</H1>
        <ContainerP>
            <p>Fecha 2021-2023</p>
            <p>
            Languages and tools: Javascript, Html, Css, React. Sass, Java, Spring,
            AWS, Docker
            </p>
            <Button>Website</Button>
        </ContainerP>
      </ContainerText>
    </ContainerEducation>
  );
};

export default EducationCard;

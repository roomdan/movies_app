import * as React from "react";
import { Container } from "@mui/material";
import slider1 from "../../../../assets/home/slider-1.png";
import slider2 from "../../../../assets/home/slider-2.jpg";
import slider3 from "../../../../assets/home/slider-3.jpg";

import "./slider.scss";

const sliders = [
  {
    url_image: slider1,
    link_to: "",
    text: "Programa tu fin de semana con Movies escoge tus peliculas favorítas",
  },
  {
    url_image: slider2,
    link_to: "",
    text: "Las mejores pelis del mundo estan en Movies",
  },
  {
    url_image: slider3,
    link_to: "",
    text: "Elije Movies de cualquier categoria",
  },
];

export function Slider(params: any) {
  const [translate, setTranslate] = React.useState(0);
  const [active_slider, setActive_slider] = React.useState(0);

  const move_track: any = function (next: number) {
    setTranslate(next * -100);
    setActive_slider(next);
  };

  return (
    <Container
      className="bg-size"
      sx={{ px: "0px !important", backgroundImage: {} }}
      maxWidth="xl"
    >
      <div className="slider">
        <div className="track" style={{ translate: translate + "%" }}>
          {sliders.map((slider) => {
            return (
              <div
                className="item"
                style={{ backgroundImage: `url("${slider.url_image}")` }}
                key={slider.url_image}
              >
                <div className="item__bg">
                  <div className="item__title">
                    <span>{slider.text}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="btn-list">
          {sliders.map((item, index) => (
            <button
              className={active_slider === index ? "btn-active" : "btn"}
              onClick={() => {
                move_track(index);
              }}
              key={item.url_image}
            >
              <div></div>
            </button>
          ))}
        </div>
      </div>
    </Container>
  );
}

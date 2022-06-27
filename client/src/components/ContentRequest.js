import React, { useState } from "react";
import MapGoogle from "./Map/MapGoogle";

const ContentRequest = (props) => {
  const {
    nume,
    denumirePopulara,
    image,
    zona,
    locatieGeografica,
    diviziune,
    descriere,
    location,
  } = props.flowers;
  console.log(props.flowers);

  return (
    <div className="content-container">
      <div className="content-column">
        <p>
          <span>Nume:</span> {nume}
        </p>
        <p>
          <span>Denumire populara:</span> {denumirePopulara}
        </p>
        <p>
          <span>Locatie:</span> {zona}
        </p>
        <p>
          <span>Locatie Geografica:</span> {locatieGeografica}
        </p>
        <p>
          <span>Diviziune Florala</span> {diviziune}
        </p>
      </div>
      <div className="content-column">
        <p className="content-description">
          <span>Descriere:</span> {descriere}
        </p>
      </div>
      <div className="content-column">
        <div className="content-image-container">
          <img src={image}></img>
        </div>
      </div>

      <div className="content-column">
        <MapGoogle coordonate={location} />
      </div>
    </div>
  );
};

export default ContentRequest;

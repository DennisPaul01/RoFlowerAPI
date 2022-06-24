import React from "react";
import MapGoogle from "./Map/MapGoogle";

const ContentRequest = () => {
  return (
    <div className="content-container">
      <div className="content-column">
        <p>
          <span>Nume:</span> Matricaria recutita
        </p>
        <p>
          <span>Denumire populara:</span> Musetel
        </p>
        <p>
          <span>Locatie:</span> Romania
        </p>
        <div className="content-image-container">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Primula_halleri.JPG/280px-Primula_halleri.JPG"></img>
        </div>
      </div>
      <div className="content-column">
        <p>
          <span>Descriere:</span> Musetelul (denumit si romanita, romonel sau
          romanica) este o planta erbacee anuala, medicinala, cu frunze divizate
          si cu flori grupate in capitule terminale. Ajunge la o inaltime de
          pana la 60 cm cu multe ramificatii, cu flori grupate in capitule
          terminale.
        </p>
        <MapGoogle />
      </div>
    </div>
  );
};
export default ContentRequest;

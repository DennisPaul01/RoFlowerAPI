import React, { useState } from "react";

// Import Components
import ContentRequest from "../components/ContentRequest";
import SearchForm from "../components/Forms/SearchForm";
import AddFlowerForm from "../components/Forms/AddFlowerForm";

// Import images
import collageFoto from "../assets/flowers-example.jpg";

const IntroductionPage = () => {
  // flower rep. state care stocheaza informatiile venit din search
  // aceste date vor fi pasate ca si props in component ContentRequest
  const [flower, setFlower] = useState();

  // showFlower - in true afiseaza daca floarea este in baza de date
  const [showFlower, setShowFlower] = useState(false);

  // showFormular - in cazul in care floarea nu este in baza de date, o poti adauga
  const [showFormular, setShowFormular] = useState();

  // Handler care ia datele din search component
  const onSearchFlower = (data) => {
    if (data.error === "Floarea nu este in data de baze") {
      setShowFlower(false);
      setFlower(data.error);
    } else {
      setShowFormular(false);
      setShowFlower(true);
      setFlower(data);
    }
  };

  return (
    <section className="introduction-page-container">
      <h4 className="intro-text">
        ROFlower ete un RESTful API ce serveste JSON files despre plante pe cale
        de disparitie din Romania. Ne concentram pe a oferi o experienta cat mai
        buna pentru utilizatori si pentru proiectele lor, gratuit. <br></br>
        <b>Exemplu: (Tei / Musetel / Anghelina / Catina / Brusture)</b>
      </h4>{" "}
      {flower === "Floarea nu este in data de baze" ? (
        <h4 className="introduction-page-add-flower">
          Floarea nu exista in baza de date, dar o poti adauga apasand{" "}
          <span
            onClick={() => {
              setShowFormular(true);
            }}
          >
            aici!
          </span>
        </h4>
      ) : (
        ""
      )}
      <SearchForm searchHandlerFlower={onSearchFlower} />
      {!showFlower && (
        <img
          src={collageFoto}
          className="introduction-page-collage-flowers"
          alt="collageFoto"
        ></img>
      )}
      {showFlower && <ContentRequest flowers={flower}></ContentRequest>}
      {showFormular && <AddFlowerForm />}
    </section>
  );
};
export default IntroductionPage;

import React from "react";
import ContentRequest from "../components/ContentRequest";

import SearchForm from "../components/Forms/SearchForm";

const IntroductionPage = () => {
  return (
    <section className="introduction-page-container">
      <h4 className="intro-text">
        ROFlower ete un RESTful API ce serveste JSON files despre plante pe cale
        de disparitie din Romania. Ne concentram pe a oferi o experienta cat mai
        buna pentru utilizatori si pentru proiectele lor, gratuit.
      </h4>
      <SearchForm />
      <ContentRequest />
    </section>
  );
};
export default IntroductionPage;

import React from "react";
import lupa from "../../assets/lupa.svg";

const SearchForm = () => {
  return (
    <form className="search-form-container">
      <input
        type="text"
        className="search-form-input"
        placeholder="Cauta floarea pe care vrei sa o vezi"
      />
      <button type="submit">
        <img src={lupa}></img>
      </button>
    </form>
  );
};
export default SearchForm;

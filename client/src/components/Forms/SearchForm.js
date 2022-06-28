import React, { useCallback, useState } from "react";
import lupa from "../../assets/lupa.svg";
import { httpGetOneFlower } from "../../hooks/request";

const SearchForm = (props) => {
  //  State care stocheaza search keyword
  const [searchWord, setSearchWord] = useState();

  const searchHandlerFlower = useCallback(async (e) => {
    e.preventDefault();

    // Return daca imputul este gol
    if (!searchWord) return;

    // daca nu este gol transformam keyword-ul introdus si il verificam daca este in baza de date
    const renameFlower = `${searchWord[0].toUpperCase()}${searchWord
      .slice(1)
      .toLowerCase()}`;
    if (renameFlower.length >= 3) {
      try {
        const response = await httpGetOneFlower(renameFlower);
        props.searchHandlerFlower(response);
      } catch (err) {
        return `Floarea nu exista`;
      }
    }
  });

  return (
    <form className="search-form-container" onSubmit={searchHandlerFlower}>
      <input
        type="text"
        className="search-form-input"
        placeholder="Cauta floarea pe care vrei sa o vezi"
        onChange={(e) => {
          setSearchWord(e.target.value);
        }}
      />
      <button type="submit">
        <img src={lupa} alt="*"></img>
      </button>
    </form>
  );
};
export default SearchForm;

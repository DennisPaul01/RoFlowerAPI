import React, { useState, useRef, useCallback } from "react";
import { httpAddFlower } from "../../hooks/request";
const AddFlowerForm = () => {
  const [error, setError] = useState(false);
  const [succes, setSucces] = useState(false);
  const [messageError, setMessageError] = useState("");

  // refs care iau data din inputs, puteam folosi states, dar dupa introducerea nu mai era necesar un clean pe inputs
  const numeInputRef = useRef();
  const denumirePopularaInputRef = useRef();
  const linkImgInputRef = useRef();
  const zonaInputRef = useRef();
  const locatieGeograficaInputRef = useRef();
  const diviziuneInputRef = useRef();
  const descriereInputRef = useRef();
  const longInputRef = useRef();
  const latInputRef = useRef();

  // functie care verifica daca se link-ul introdus este imagine
  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
  }

  // handler care trimite floarea noua introdusa in body ca request post pe functia httpAddFlower
  const addFlowerHandler = useCallback(async (e) => {
    e.preventDefault();
    if (
      numeInputRef.current.value.length < 3 ||
      denumirePopularaInputRef.current.value.length < 3 ||
      linkImgInputRef.current.value.length < 3 ||
      zonaInputRef.current.value.length < 3 ||
      locatieGeograficaInputRef.current.value.length < 3 ||
      diviziuneInputRef.current.value.length < 3 ||
      descriereInputRef.current.value.length < 3 ||
      longInputRef.current.value.length < 1 ||
      latInputRef.current.value.length < 1
    ) {
      setError(true);
      setMessageError("Toata campurile trebuie sa fie completate");
    } else if (!isImage(linkImgInputRef.current.value)) {
      setError(true);
      setMessageError("The image link trebuie sa fie .jpg ori .png");
    } else {
      setError(false);
      setSucces(true);
      setMessageError("Floarea a fost adaugata in baza de date!");

      const renameFlower = `${numeInputRef.current.value[0].toUpperCase()}${numeInputRef.current.value
        .slice(1)
        .toLowerCase()}`;

      const response = await httpAddFlower({
        nume: renameFlower,
        denumirePopulara: denumirePopularaInputRef.current.value,
        image: linkImgInputRef.current.value,
        zona: zonaInputRef.current.value,
        locatieGeografica: locatieGeograficaInputRef.current.value,
        diviziune: diviziuneInputRef.current.value,
        descriere: descriereInputRef.current.value,
        location: [longInputRef.current.value, latInputRef.current.value],
      });
      console.log(
        `Response server: ${response.status} - floarea a fost adaugata`
      );
    }
  });

  return (
    <form className="form-add-container" onSubmit={addFlowerHandler}>
      <h4>Adauga floarea ta!</h4>
      {error && <h4 className="form-add-error">{messageError}</h4>}
      {succes && <h4 className="form-add-succes">{messageError}</h4>}
      {!succes && (
        <div>
          <label>
            Nume:<br></br>
            <input type="text" name="nume" ref={numeInputRef} />
          </label>
          <label>
            Denumire Populara:<br></br>
            <input
              type="text"
              name="denumirePopulara"
              ref={denumirePopularaInputRef}
            />
          </label>
          <label>
            Link Imagine:<br></br>
            <input type="text" name="image" ref={linkImgInputRef} />
          </label>
          <label>
            Zona:<br></br>
            <input type="text" name="image" ref={zonaInputRef} />
          </label>
          <label>
            Locatie Geografica:<br></br>
            <input
              type="text"
              name="locatieGeografica"
              ref={locatieGeograficaInputRef}
            />
          </label>
          <label>
            Diviziune:<br></br>
            <input type="text" name="diviziune" ref={diviziuneInputRef} />
          </label>
          <label>
            Descriere:<br></br>
            <input type="text" name="descriere" ref={descriereInputRef} />
          </label>
          <label>
            Longitudine:<br></br>
            <input
              type="number"
              name="Longitudine"
              ref={longInputRef}
              placeholder="Intre 25 - 26"
            />
          </label>
          <label>
            Latitudine:<br></br>
            <input
              type="number"
              name="Latitudine"
              ref={latInputRef}
              placeholder="Intre 45 - 46"
            />
          </label>
          <input type="submit" value="Adauga Floare" />
        </div>
      )}
    </form>
  );
};

export default AddFlowerForm;

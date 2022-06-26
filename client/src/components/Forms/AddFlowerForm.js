import React from "react";

const AddFlowerForm = () => {
  return (
    <form className="form-add-container">
      <label>
        Nume:<br></br>
        <input type="text" name="nume" />
      </label>
      <label>
        Denumire Populara:<br></br>
        <input type="text" name="denumirePopulara" />
      </label>
      <label>
        Link Imagine:<br></br>
        <input type="text" name="image" />
      </label>
      <label>
        Zona:<br></br>
        <input type="text" name="image" />
      </label>
      <label>
        Locatie Geografica:<br></br>
        <input type="text" name="locatieGeografica" />
      </label>
      <label>
        Diviziune:<br></br>
        <input type="text" name="diviziune" />
      </label>
      <label>
        Descriere:<br></br>
        <input type="text" name="descriere" />
      </label>
      <label>
        Longitudine:<br></br>
        <input type="number" name="Longitudine" />
      </label>
      <label>
        Latitudine:<br></br>
        <input type="number" name="Latitudine" />
      </label>
      <input type="submit" value="Adauga Floare" />
    </form>
  );
};

export default AddFlowerForm;

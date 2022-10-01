import React, { useState } from "react";
//import { scroll } from "../../utils/scroll";
import Hijo from "./Hijo";

const Padre = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch("");
  };

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <>
      <form className="formulario" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          value={search}
          onChange={handleChange}
          placeholder="Buscar..."
          required
        />
        <button type="submit">Buscar</button>
      </form>
      <h4>componente padre: {search}</h4>
      <Hijo handleChange={search} />
    </>
  );
};
export default Padre;

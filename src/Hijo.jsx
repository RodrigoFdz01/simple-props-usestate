import React, { useEffect, useState } from "react";

//import { useState } from "react";

function Hijo({ handleChange }) {
  const [state, setState] = useState("");
  useEffect(() => {
    setState(handleChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <h4>{state}</h4>
    </div>
  );
}
export default Hijo;

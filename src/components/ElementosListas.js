import React from "react";
import { useState } from "react";

function ElementosListas({ elementosIniciales }) {
  const [lista, setLista] = useState(elementosIniciales);

  return (
    <div>
      <h2>Lista de Elementos</h2>
      <ul>
        {lista.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ElementosListas;

import React from 'react';
import ElementosListas from './components/ElementosListas.js';

export default function Ejercicio3() {
  const elementosIniciales = ["Informatica Aplicada", "Programacion", "Robotica", "Matematica", "Fisica"];

  return (
    <div>
      <h1>Ejercicio 3</h1>
      <ElementosListas elementosIniciales={elementosIniciales} />
    </div>
  );
}

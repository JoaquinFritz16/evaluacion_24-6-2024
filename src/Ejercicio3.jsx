import React from 'react';
import ElementosListas from './components/ElementosListas.js';

export default function Ejercicio3() {
  const elementosIniciales = ["Informatica Aplicada", "Programacion", "Robotica", "Matematica", "Fisica"];

  return (
    <div>
      <ElementosListas elementosIniciales={elementosIniciales} />
    </div>
  );
}

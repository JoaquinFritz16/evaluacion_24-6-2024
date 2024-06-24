import { useState } from "react";

export default function Ejercicio2() {
  const [input, setInput] = useState({ name: "", age: 0 });

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(input.age) > 18) {
      window.alert(`Hola ${input.name} tienes más de 18, tienes ${input.age} años, eres mayor de 18`);
    } else {
      window.alert(`Hola ${input.name} tienes ${input.age} años, no eres mayor que 18`);
    }
  };

  return (
    <div>
      <h2>Ejercicio 2: Formulario</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={input.name}
          onChange={handleInput}
        />
        <input
          type="number"
          name="age"
          value={input.age}
          onChange={handleInput}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

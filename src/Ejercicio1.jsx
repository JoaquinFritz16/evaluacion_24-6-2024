import {useState} from "react"
export default function Ejercicio1() {
  const [lista, Setlista] = useState([])

  const handleSelect = (e) => {
    Setlista(e.target.value)
    console.log(lista)
    window.alert(lista)
  }
  return (
    <div>
      <h2>Ejercicio 1: Lista desplegable</h2>

      <label>Seleccione una fruta: </label>
      <select onChange={handleSelect}>
        <option value="manzana">Manzana</option>
        <option value="pera">Pera</option>
        <option value="naranja">Naranja</option>
        <option value="mandarina">Mandarina</option>
      </select>

    </div>
  )
}

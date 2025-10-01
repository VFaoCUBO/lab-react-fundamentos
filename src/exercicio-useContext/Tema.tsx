import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Tema() {
  const { tema, alternarTema } = useContext(ThemeContext);

  return (
    <div style={{ background: tema === "light" ? "#fff" : "#333", color: tema === "light" ? "#000" : "#fff" }}>
      <h2>Tema atual: {tema}</h2>
      <button onClick={alternarTema}>Trocar Tema</button>
    </div>
  );
}

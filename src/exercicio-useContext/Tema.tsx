import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export default function Tema() {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("Tema deve ser usado dentro de um ThemeProvider");
  const { tema, alternarTema } = context;

  return (
    <div style={{ background: tema === "light" ? "#fff" : "#333", color: tema === "light" ? "#000" : "#fff" }}>
      <h2>Tema atual: {tema}</h2>
      <button onClick={alternarTema}>Trocar Tema</button>
    </div>
  );
}

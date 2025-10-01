import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab React Fundamentos</h1>
      <p>Escolha um exercício para visualizar:</p>
        <p>
          <Link to="/useState">Exercício 1 - useState</Link>
        </p>
        <p>
          <Link to="/useEffect">Exercício 2 - useEffect</Link>
        </p>
        <p>
          <Link to="/useContext">Exercício 3 - useContext</Link>
        </p>
        <p>
          <Link to="/router">Exercício 4 - react-router-dom</Link>
        </p>
    </div>
  );
}

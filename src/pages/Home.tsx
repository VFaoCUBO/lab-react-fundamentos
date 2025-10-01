import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Lab React Fundamentos</h1>
      <p>Escolha um exercício para visualizar:</p>
      <ul>
        <li>
          <Link to="/useState">Exercício 1 - useState</Link>
        </li>
        <li>
          <Link to="/useEffect">Exercício 2 - useEffect</Link>
        </li>
        <li>
          <Link to="/useContext">Exercício 3 - useContext</Link>
        </li>
        <li>
          <Link to="/router">Exercício 4 - react-router-dom</Link>
        </li>
      </ul>
    </div>
  );
}

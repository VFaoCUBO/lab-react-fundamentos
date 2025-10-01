import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

// Páginas e Exercícios
import Home from "./pages/Home";
import Contador from "./exercicio-useState/contador";
import ContadorTitulo from "./exercicio-useEffect/ContadorTitulo";
import { ThemeProvider } from "./exercicio-useContext/ThemeContext";
import Tema from "./exercicio-useContext/Tema";
import Inicio from "./exercicio-router/Inicio";
import Sobre from "./exercicio-router/Sobre";
import Contato from "./exercicio-router/Contato";

function App() {
  return (
    <BrowserRouter>
      {/* Menu fixo de navegação principal */}
      <nav style={{ display: "flex", gap: "15px", padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/useState">useState</Link>
        <Link to="/useEffect">useEffect</Link>
        <Link to="/useContext">useContext</Link>
        <Link to="/router">Router</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/useState" element={<Contador />} />

        <Route path="/useEffect" element={<ContadorTitulo />} />

        <Route
          path="/useContext"
          element={
            <ThemeProvider>
              <Tema />
            </ThemeProvider>
          }
        />
       
        <Route
          path="/router/*"
          element={
            <div style={{ padding: "20px" }}>
              <h2>Exercício 4 - Navegação</h2>
              <nav style={{ display: "flex", gap: "10px" }}>
                <Link to="">Início</Link>
                <Link to="sobre">Sobre</Link>
                <Link to="contato">Contato</Link>
              </nav>
              <Routes>
                <Route path="/" element={<Inicio />} />
                <Route path="sobre" element={<Sobre />} />
                <Route path="contato" element={<Contato />} />
              </Routes>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

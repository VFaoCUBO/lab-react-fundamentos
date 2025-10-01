import {Contador} from "./exercicio-useState/contador";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Inicio from "./exercicio-router/Inicio";
import Sobre from "./exercicio-router/Sobre";
import Contato from "./exercicio-router/Contato";

function App() {
 return(
 <BrowserRouter>
 <nav style={{ display: "flex", gap: 10 }}>
   <Link to="/">Início</Link>
   <Link to="/sobre">Sobre</Link>
   <Link to="/contato">Contato</Link>
 </nav>

 <Routes>
   <Route path="/" element={<Inicio />} />
   <Route path="/sobre" element={<Sobre />} />
   <Route path="/contato" element={<Contato />} />
 </Routes>
</BrowserRouter>
    );
}

export default App;

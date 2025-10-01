import { useState, useEffect } from "react";

export default function ContadorTitulo() {
  const [contador, setContador] = useState<number>(0);

  useEffect(() => {
    document.title = `Contador: ${contador}`;
  }, [contador]);

  return (
    <div>
      <h2>Contador com Título</h2>
      <p>Valor atual: {contador}</p>
      <button onClick={() => setContador(c => c + 1)}>Incrementar</button>
      <button onClick={() => setContador(c => c - 1)}>Decrementar</button>
    </div>
  );
}

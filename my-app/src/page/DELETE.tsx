import React, { ReactElement, useState, useEffect } from "react";

interface Jogador {
  id: string;
  nome: string;
}

const GetDELETE = (): ReactElement => {
    const [selectedJogadorId, setSelectedJogadorId] = useState("");
    const [jogadores, setJogadores] = useState<Jogador[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    await fetch("http://localhost:4000/api/jogadores", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        setJogadores(data);
      });
  };

  const deleteJogador = async () => {
    if (selectedJogadorId) {
      await fetch(`http://localhost:4000/api/jogadores?Id=${selectedJogadorId}`, {
        method: "DELETE",
      })
      .then((res) => res.json())
        .then((data) => {
          fetchData();
        });
    }
  };

  return (
    <React.Fragment>
      <div className="cardPUT">
        <h2>Deletar Jogador</h2>
        <select value={selectedJogadorId} onChange={(e) => setSelectedJogadorId(e.target.value)}>
          {jogadores.map((jogador) => (
            <option key={jogador.id} value={jogador.id}>
              {jogador.nome}
            </option>
          ))}
        </select>
        <button onClick={deleteJogador}>Delete</button>
      </div>
    </React.Fragment>
  );
};

export default GetDELETE;
import React, { ReactElement, ReactNode, useEffect, useState } from "react";

interface Jogador {
    id: string;
    nome: string;
    idade: number;
    posicao: string
    bagre: boolean;
  }

const PutJogadores = (): ReactElement => {
  const [selectedJogadorId, setSelectedJogadorId] = useState("");
  const [updateJogadorNome, setUpdateJogadorNome] = useState("");
  const [updateJogadorIdade, setUpdateJogadorIdade] = useState("");
  const [updateJogadorPosicao, setUpdateJogadorPosicao] = useState("");
  const [updateJogadorBagre, setUpdateJogadorBagre] = useState(false);
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

  const updateJogadorById = async () => {
    if (selectedJogadorId && updateJogadorNome) {
      const data = {
        id: selectedJogadorId,
        nome: updateJogadorNome,
        idade: parseInt(updateJogadorIdade),
        posicao: updateJogadorPosicao,
        bagre: Boolean(updateJogadorBagre),
      };
  
      await fetch("http://localhost:4000/api/jogadores", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
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
            <div style={{ textAlign: 'center' }}>
                <h2 >Atualiza Jogador</h2>
                <label style={{ display: 'block' }} htmlFor="nome">Nome: </label>
                <input id="nome" type="text" value={updateJogadorNome} onChange={(e) => 
                    setUpdateJogadorNome(e.target.value)} />
                
                <label style={{ display: 'block' }} htmlFor="idade">Idade: </label>
                <input id="idade" type="text" value={updateJogadorIdade} onChange={(e) => 
                    setUpdateJogadorIdade(e.target.value)} />    
                    
                <label style={{ display: 'block' }} htmlFor="posi">Posição e Camisa: </label>
                <input id="posi" type="text" value={updateJogadorPosicao} onChange={(e) => 
                    setUpdateJogadorPosicao(e.target.value)} />
                <br></br>
                <label style={{ display: 'inline-block' }} htmlFor="bagre">Bagre: </label>
                <input id="bagre" type="checkbox" checked={updateJogadorBagre} onChange={(e) => 
                    setUpdateJogadorBagre(e.target.checked)} />
                <br></br>
                <select value={selectedJogadorId} onChange={(e) => setSelectedJogadorId(e.target.value)}>
                    {jogadores.map((jogador) => (
                    <option key={jogador.id} value={jogador.id}>
                        {jogador.nome}
                    </option>
                    ))}
                </select>
                <button onClick={updateJogadorById}>Atualiza</button>
            </div>
            
        </div>
    </React.Fragment>
  );
};

export default PutJogadores;
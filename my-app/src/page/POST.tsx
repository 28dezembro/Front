import React, { ReactElement, useState } from "react";

const PostJogador = (): ReactElement => {
    const [addJogadorNome, setAddJogadorNome] = useState("");
    const [addJogadorIdade, setAddJogadorIdade] = useState("");
    const [addJogadorPosicao, setAddJogadorPosicao] = useState("");
    const [addJogadorBagre, setAddJogadorBagre] = useState(false);

    const addJogador = async () => {
        if (addJogadorNome && addJogadorIdade && addJogadorPosicao) {
            const idade = parseInt(addJogadorIdade);
            if (isNaN(idade)) {
                console.error("Idade must be a valid integer");
                return;
            }
            try {
                const url = 'http://localhost:4000/api/jogadores';
                const jogador = {
                    nome: addJogadorNome,
                    idade,
                    posicao: addJogadorPosicao,
                    bagre: addJogadorBagre
                };
                await fetch(url, {
                    method: "POST",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(jogador)
                });
                setAddJogadorNome("");
                setAddJogadorIdade("");
                setAddJogadorPosicao("");
                setAddJogadorBagre(false);
            } catch (error) {
                console.error(error);
            }
        }
    };

    return (
        <React.Fragment>
            <div className="cardPUT">
                <h2>Adicione um  novo jogador</h2>
                <div style={{ textAlign: 'center'}}>
                    <label style={{ display: 'block' }} htmlFor="nome">Nome: </label>
                    <input id="nome" style={{ width: "180px" }} type="text" value={addJogadorNome} onChange={(e) =>         setAddJogadorNome(e.target.value)} />
                    
                    <label style={{ display: 'block' }} htmlFor="idade">Idade: </label>
                    <input id="idade" style={{ width: "180px" }} type="text" value={addJogadorIdade} onChange={(e) =>   setAddJogadorIdade(e.target.value)} />
                    
                    <label style={{ display: 'block' }} htmlFor="posi">Posição e Camisa: </label>
                    <input id="posi" style={{ width: "180px" }} type="text" value={addJogadorPosicao} onChange={(e) =>      setAddJogadorPosicao(e.target.value)} />
                    <br />
                    <label style={{ display: 'inline-block' }} htmlFor="bagre">Bagre: </label>
                    <input id="bagre" type="checkbox" checked={addJogadorBagre} onChange={(e) => 
                    setAddJogadorBagre(e.target.checked)} />
                    <br />
                    <button onClick={addJogador}>Add</button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PostJogador;
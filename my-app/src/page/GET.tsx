import React, { ReactElement, ReactNode, useEffect, useState } from "react"

const displayJogadores = (jogadores: any) : ReactNode => {
  const result : any = []
  if(jogadores){
    jogadores.forEach((jogador: any) => {
      result.push(
        <div className="cardGET" key={jogador.Id}>
          <h2> {jogador.nome} </h2>
          <h3> {jogador.idade} </h3>
          <h3> {jogador.posicao} </h3>
          <h3> Bagre: {jogador.bagre? 'Sim' : 'Não'} </h3>
        </div>
      )
    })
  }

  return result
}

const GetJogadores = (): ReactElement => {
  const [jogadores, setJogadores] = useState([])

  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    await fetch("http://localhost:4000/api/jogadores",
     { method: "GET" })
    .then((res) => res.json())
    .then((data) => {
        setJogadores(data)
    })
  }

  return (
    <React.Fragment>
      <div className="card-container">
        {displayJogadores(jogadores)}
      </div>
    </React.Fragment>
  )
}

export default GetJogadores

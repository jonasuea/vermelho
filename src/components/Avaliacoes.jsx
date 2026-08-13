import { useState } from "react"; 
 
function Avaliacoes() { 
  const [mostrarFormulario, setMostrarFormulario] = useState(false); 
 
  const [nome, setNome] = useState(""); 
  const [avaliacao, setAvaliacao] = useState(""); 
  const [estrelas, setEstrelas] = useState(5); 
 
  const [listaAvaliacoes, setListaAvaliacoes] = useState([ 
    { 
      nome: "Lucas Andrade", 
      estrelas: 5, 
      texto: "Excelente atendimento! Serviço rápido, eficiente e de muita qualidade. Recomendo!" 
    }, 
    { 
      nome: "Juliana Silva", 
      estrelas: 5, 
      texto: "Meu computador estava muito lento e eles conseguiram resolver todos os problemas. Ficou ótimo!" 
    }, 
    { 
      nome: "Rafael Costa", 
      estrelas: 5, 
      texto: "Atendimento profissional, preço justo e serviço de alta qualidade. Super recomendo!" 
    } 
  ]); 
 
  function enviarAvaliacao(e) { 
    e.preventDefault(); 
 
    if (nome.trim() === "" || avaliacao.trim() === "") { 
      alert("Preencha seu nome e sua avaliação."); 
      return; 
    } 
 
    const novaAvaliacao = { 
      nome: nome, 
      estrelas: estrelas, 
      texto: avaliacao 
    }; 
 
    setListaAvaliacoes([...listaAvaliacoes, novaAvaliacao]); 
 
    setNome(""); 
    setAvaliacao(""); 
    setEstrelas(5); 
 
    setMostrarFormulario(false); 
 
    alert("Avaliação enviada com sucesso!"); 
  } 
 
  return ( 
    <div className="avaliacoes"> 
 
      <section className="avaliacoes-topo"> 
 
        <div className="icone-avaliacao"> 
          💬 
        </div> 
 
        <h1 className="ava">AVALIAÇÕES</h1> 
 
        <p> 
          Veja o que nossos clientes dizem 
          <br /> 
          sobre nosso trabalho. 
        </p> 
 
      </section> 
 
 
      <section className="avaliacoes-container"> 
 
        {listaAvaliacoes.map((item, index) => ( 
 
          <div className="card-avaliacao" key={index}> 
 
            <div className="avatar"> 
              {item.nome.charAt(0).toUpperCase()} 
            </div> 
 
            <div className="dados-cliente"> 
 
              <h2>{item.nome}</h2> 
 
              <span>Cliente</span> 
 
              <div className="estrelas"> 
                {"★".repeat(item.estrelas)} 
              </div> 
 
            </div> 
 
            <p className="texto-avaliacao"> 
              {item.texto} 
            </p> 
 
            <div className="aspas"> 
              “ 
            </div> 
 
          </div> 
 
        ))} 
 
      </section> 
 
 
      <section className="deixe-avaliacao"> 
 
        <h2>💬 DEIXE SUA AVALIAÇÃO</h2> 
 
        <p> 
          Sua opinião é muito importante para nós! 
        </p> 
 
        <button 
          className="botao-avaliar" 
          onClick={() => setMostrarFormulario(!mostrarFormulario)} 
        > 
          ✎ AVALIAR AGORA 
        </button> 
 
      </section> 
 
 
      {mostrarFormulario && ( 
 
        <form 
          className="formulario-avaliacao" 
          onSubmit={enviarAvaliacao} 
        > 
 
          <h2>Deixe sua avaliação</h2> 
 
          <label>Seu nome</label> 
 
          <input 
            type="text" 
            placeholder="Digite seu nome" 
            value={nome} 
            onChange={(e) => setNome(e.target.value)} 
          /> 
 
 
          <label>Nota</label> 
 
          <select 
            value={estrelas} 
            onChange={(e) => setEstrelas(Number(e.target.value))} 
          > 
            <option value="5">★★★★★ - 5 estrelas</option> 
            <option value="4">★★★★ - 4 estrelas</option> 
            <option value="3">★★★ - 3 estrelas</option> 
            <option value="2">★★ - 2 estrelas</option> 
            <option value="1">★ - 1 estrela</option> 
          </select> 
 
 
          <label>Sua avaliação</label> 
 
          <textarea 
            placeholder="Conte como foi sua experiência..." 
            value={avaliacao} 
            onChange={(e) => setAvaliacao(e.target.value)} 
          /> 
 
 
          <button 
            type="submit" 
            className="botao-enviar" 
          > 
            ENVIAR AVALIAÇÃO 
          </button> 
 
        </form> 
 
      )} 
 
    </div> 
  ); 
} 
 
export default Avaliacoes;
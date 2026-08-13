function Contatos() { 
  return ( 
    <div className="contatos"> 
 
      <div className="contatos-header"> 
        <img src ="logo.png" className="logo-contato"></img>
        <p>FALE CONOSCO</p> 
 
      
 
        <span> 
          Estamos prontos para ajudar com suas necessidades em informática. 
        </span> 
      </div> 
 
      <div className="contatos-content"> 
 
        {/* INFORMAÇÕES */} 
        <div className="informacoes"> 
 
          <div className="contato-card"> 
            <div className="icone">☎</div> 
 
            <div> 
              <h3>WhatsApp</h3> 
              <p>(92) 99999-9999</p> 
            </div> 
          </div> 
 
          <div className="contato-card"> 
            <div className="icone">✉</div> 
 
            <div> 
              <h3>E-mail</h3> 
              <p>contato@alphalog.com</p> 
            </div> 
          </div> 
 
          <div className="contato-card"> 
            <div className="icone">⌖</div> 
 
            <div> 
              <h3>Endereço</h3> 
              <p>Manaus - AM</p> 
            </div> 
          </div> 
 
          <div className="contato-card"> 
            <div className="icone">◷</div> 
 
            <div> 
              <h3>Atendimento</h3> 
              <p>Segunda a sexta, das 08:00 às 18:00</p> 
            </div> 
          </div> 
 
        </div> 
 
 
        {/* FORMULÁRIO */} 
        <form className="formulario"> 
 
          <div className="linha-form"> 
 
            <input 
              type="text" 
              placeholder="Seu nome" 
            /> 
 
            <input 
              type="email" 
              placeholder="Seu e-mail" 
            /> 
 
          </div> 
 
          <input 
            type="text" 
            placeholder="Assunto" 
          /> 
 
          <textarea 
            placeholder="Digite sua mensagem" 
          ></textarea> 
 
          <button type="submit"> 
            ➤ &nbsp; ENVIAR MENSAGEM 
          </button> 
 
        </form> 
 
      </div> 
 
    </div> 
  ); 
} 
 
export default Contatos;
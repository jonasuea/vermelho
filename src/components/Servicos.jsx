function Servicos() { 
  return ( 
    <div className="servicos"> 
 
      <h1>Nossos Serviços</h1> 
 
      <p className="subtitulo"> 
        Soluções completas para computadores, notebooks e redes. 
      </p> 
 
      <div className="servicos-container"> 
 
        <div className="servico-card"> 
          <h2>🔧 Manutenção de computadores</h2> 
          <p> 
            Manutenção e reparo de computadores e notebooks. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>💻 Formatação e instalação</h2> 
          <p> 
            Formatação e instalação do sistema operacional e programas. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>🧹 Limpeza preventiva</h2> 
          <p> 
            Limpeza e manutenção preventiva dos equipamentos. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>📦 Programas e drivers</h2> 
          <p> 
            Instalação e configuração de programas e drivers. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>🌐 Configuração de redes</h2> 
          <p> 
            Configuração de redes e conexão de dispositivos. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>🔍 Diagnóstico de problemas</h2> 
          <p> 
            Identificação de problemas de hardware e software. 
          </p> 
        </div> 
 
        <div className="servico-card"> 
          <h2>⚡ Otimização de computadores</h2> 
          <p> 
            Ajustes para melhorar o desempenho do computador. 
          </p> 
        </div> 
 
      </div> 
 
      {/* CONTATOS */} 
      <div className="contato-servicos"> 
 
        <h2>📞 Entre em contato conosco</h2> 
 
        <p> 
          Precisa de ajuda com seu computador? Fale com a nossa equipe. 
        </p> 
 
        <div className="contatos-container"> 
 
          <div className="contato-card"> 
            <h3>📱 WhatsApp</h3> 
            <p>Fale diretamente com nossa equipe.</p> 
            <a 
              href="https://wa.me/5500000000000" 
              target="_blank" 
              rel="noopener noreferrer" 
            > 
              Falar no WhatsApp 
            </a> 
          </div> 
 
          <div className="contato-card"> 
            <h3>📧 E-mail</h3> 
            <p>Envie sua dúvida ou solicitação.</p> 
            <a href="mailto:contato@alphalog.com"> 
              Enviar e-mail 
            </a> 
          </div> 
           <div className="contato-card"> 
            <h3>🕐 Horário</h3> 
            <p>Segunda a sexta-feira</p> 
            <span>08:00 às 18:00</span> 
          </div> 
  
          </div>
 
           <div className="contato-card1"> 
            <h3>📍 Endereço</h3> 
            <p>Venha até nossa assistência técnica.</p> 
            <span>Nosso endereço</span>
          
           <div className="mapa">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63741.85421719834!2d-58.436856999999996!3d-3.1301294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x926f5711f324606f%3A0x39769b448fb51917!2sMercadinho%20Jobson%20%26%20Mayra!5e0!3m2!1spt-BR!2sbr!4v1786487570484!5m2!1spt-BR!2sbr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="strict-origin-when-cross-origin"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização da assistência técnica"
                ></iframe>
  </div>
</div>
 
        </div> 
 
      </div> 
 
    
  ); 
} 
 
export default Servicos;
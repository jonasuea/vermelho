import React from "react";

export default function Home() {
  return (
    <main className="home">
      <header className="hero">
        <div className="hero-container">
          {}
       
        
         <img 
  src="logo.png"
  alt="Logo da InfoTech Solutions"
  className="logo-hero"
/>
          <h2 className="hero-subtexto">
            Soluções em informática, assistência técnica e suporte especializado.
          </h2>
         
        </div>
      </header>

      <section className="servicos">
            <h1 className="ser">Serviços</h1>
        <div className="servicos-container">
      
          <div className="lista-servicos">
            <li>Reparo de computadores e notebooks</li>
            <li>Instalação e configuração de redes</li>
            <li>Manutenção preventiva e otimização</li>
            <li>Recuperação de dados</li>
          </div>
        </div>
      </section>

      <section className="beneficios">
        <div className="beneficios-container">
          <h2>Por que nos escolher</h2>
          <div className="cards">
            <div className="card">
              <h3>Qualidade</h3>
              <p>Peças e serviços com garantia e profissionais qualificados.</p>
            </div>
            <div className="card">
              <h3>Transparência</h3>
              <p>Orçamento claro e comunicação durante todo o processo.</p>
            </div>
            <div className="card">
              <h3>Rapidez</h3>
              <p>Atendimento ágil para minimizar o tempo de inatividade.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="secao-sobre">
        <div className="sobre">
          <div className="sobre-container">
            <p className="sobre-subtitulo">SOBRE NÓS</p>
            <h1 className="sobre-titulo">ALPHALOG</h1>
            <p className="sobre-texto">
              Somos uma empresa especializada em assistência técnica e soluções em informática.
            </p>
            <p className="sobre-texto">
              Atuamos com computadores, notebooks e redes, buscando oferecer um atendimento de qualidade, transparente e eficiente.
            </p>
            <div className="objetivo">
              <h2>NOSSO OBJETIVO</h2>
              <p>Oferecer soluções confiáveis e um atendimento que realmente ajude nossos clientes.</p>
            </div>
          </div>
        </div>
      </section>

    
    </main>
  );
}
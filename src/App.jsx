import { BrowserRouter, Routes, Route,Link} from "react-router-dom";
import Avaliacoes from "./components/Avaliacoes";
import Contatos from "./components/Contatos";
import Servicos from "./components/Servicos";
import "./App.css";
import Home from "./components/Home";

function App(){
  return(
    <BrowserRouter>
    <nav className="navbar">
      <div className="menu">
      <Link to="/">Home</Link>  {""}
      <Link to="/avaliacao">Avaliações</Link>  {""}
      <Link to="/servicos">Servicos</Link> {""}
      </div>
    </nav>
    <main className="conteudo">
    <Routes>
      <Route path="/"element={<Home/>} />
      <Route path="/avaliacao"element={<Avaliacoes />} />
      <Route path="/servicos"element={<Servicos />} />
    </Routes>
    </main>
    </BrowserRouter>
  )
}

export default App;
import {useState} from "react"

function Inser(){
    const[texto, setTexto] = useState("")
    const[lista, setLista] = useState([])

    function addTarefa(){
        setLista([...lista, texto])
        setTexto("")
    }

    return(
        <div>
            <input value={texto} onChange={(e) => setTexto(e.target.value)} placeholder="Digite uma tarefa"/>
            <button onClick={addTarefa}> Add</button>
            <ul>{lista.map((item, idx => <li key = {idx}>{item}</li>))}</ul>
        </div>
    )
}

export default Inser

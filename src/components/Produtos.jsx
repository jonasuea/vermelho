function Produto({nome,preco}){
    return(
        <div
            style={{
                backgroundColor: "blue",
                color: "white",
                padding: "20px",
                borderRadius:"10px",
            }}
        >
            <h2>{nome}
            </h2>
            <p>Preco: R${preco}</p>
        </div>
    )
}

export default Produto;
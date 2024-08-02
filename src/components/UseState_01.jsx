import { useState } from "react";

export default () => {

    const [valor,setValor] = useState(0);

    function diminuir(){
       setValor(v => v - 1)
    }

    function aumentar(){
        setValor(v => v + 1)
    }

    return (
        <>
            <h4>Use State</h4>
            <h3>O valor é: {valor}</h3>
            <button onClick={diminuir}>Diminuir</button>
            <button onClick={aumentar}>Aumentar</button>
        </>
    )

}
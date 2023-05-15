import { useEffect, useState } from "react"

const Questao02 = () =>{

    const [turn, setTurn] = useState(true)
    const [img, setImg] = useState("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")

    //Aqui eu farei uma função para mudar as duas variáveis de estado:
    const virareTrocar = () =>{ 
        if (turn) {
            setTurn(false)
            setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png")
        } else {
            setTurn(true)
            setImg("https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png")
        }
    }

    //Utilizando o useEffect eu posso atualizar a imagem na minha página
    useEffect( 
        ()=>{
            
        },
        [img]
    )

    return(
        <>
        <div>
            <h1>Pikachu!</h1>
            <button onClick={virareTrocar}>Vira!</button> 
                <img //Acima eu chamo no OnClick a minha função virareTrocar, que atualiza minhas variáveis
                src={`${img}`} //chamo a imagem como a variável img utilizando a crase que me possibilita por uma variável como src.
                width={{width:"400px"}}/>
        </div>
        </>
    )
}

export default Questao02
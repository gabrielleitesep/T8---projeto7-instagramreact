import React from 'react'

export default function Usuario() {

    const [img, setImg] = React.useState("./media/img/catanacomics.svg")

    const [nick, setNick] = React.useState("catanacomics")

    return (

        <div className="usuario">
        <img onClick={()=>setImg(prompt("Insira o link da sua imagem de perfil!"))} src={img} alt="imagemUsuario"/>
        <div className="texto">
            <strong>{nick}</strong>
            <span>
                Catana
                <ion-icon onClick={()=>setNick(prompt("Qual é o seu nome?"))} name="pencil"></ion-icon>
            </span>
        </div>
    </div>
    )
}
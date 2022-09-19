import React from "react";

export default function Posts() {
    let objetosPost = [
      {
        usuario: "meowed",
        imagem: "gato-telefone",
        curtidoPor: "respondeai",
        curtidas: 101.523
      },
      {
        usuario: "barked",
        imagem: "dog",
        curtidoPor: "adorable_animals",
        curtidas: 99.159
      }
    ];
      return (
        <div className="posts">
          {objetosPost.map((objeto, index) => {
            return (
              <Post
                key={index}
                usuario={objeto.usuario}
                imagem={objeto.imagem}
                curtidoPor={objeto.curtidoPor}
                curtidas={objeto.curtidas}
              />
            );
          })}
        </div>
      );
    }
    function Post(props) {
      
      const [bookmark, setBookmark] = React.useState("bookmark-outline")

      function salvarPost (){
        if(bookmark === "bookmark-outline"){
          setBookmark("bookmark")
        } else{
          setBookmark("bookmark-outline")
        }
      }
      return (
        <div className="post">
          <div className="topo">
            <div className="usuario">
              <img src={`./media/img/${props.usuario}.svg`} alt="imagemPostUser" />
              {props.usuario}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>
    
          <div className="conteudo">
            <img src={`media/img/${props.imagem}.svg`} onClick={() => alert("Post curtido :)")} alt="imagemPost" />
          </div>
    
          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon
                  name="heart-outline"
                  onClick={() => alert("Visualize o botão mudando de cor :)")}
                ></ion-icon>
                <ion-icon name="chatbubble-outline"></ion-icon>
                <ion-icon name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick={salvarPost} name={bookmark}></ion-icon>
              </div>
            </div>
    
            <div className="curtidas">
              <img
                src={`./media/img/${props.curtidoPor}.svg`}
                alt="imagemPostCurtida"
              />
              <div className="texto">
                Curtido por <strong>{props.curtidoPor}</strong> e{" "}
                <strong>outras {props.curtidas} pessoas</strong>
              </div>
            </div>
          </div>
        </div>
      );
    }
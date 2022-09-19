
export default function Stories() {
  const stories = [
    { imagem: "./media/img/9gag.svg", usuario: "9gag" },
    { imagem: "./media/img/meowed.svg", usuario: "meowed" },
    { imagem: "./media/img/barked.svg", usuario: "barked" },
    {imagem: "./media/img/nathanwpylestrangeplanet.svg",usuario: "nathanwpylestrangeplanet",},
    { imagem: "./media/img/wawawicomics.svg", usuario: "wawawicomics" },
    { imagem: "./media/img/respondeai.svg", usuario: "respondeai" },
    { imagem: "./media/img/filomoderna.svg", usuario: "filomoderna" },
    { imagem: "./media/img/memeriagourmet.svg", usuario: "memeriagourmet" },
  ];

  return (
    <div className="stories">
      {stories.map((objeto, index) => (
        <Story imagem={objeto.imagem} usuario={objeto.usuario} key={index}/>
      ))}

      <div className="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  );
}
function Story(props) {
  return (
    <div className="story">
      <div className="imagem">
        <img src={props.imagem} alt={props.usuario}/>
      </div>
      <div className="usuario">{props.usuario}</div>
    </div>
  );
}
export default function Sugestoes() {
  const sugestoes = [
    {
      imagem: "./media/img/bad.vibes.memes.svg",
      nome: "bad.vibes.memes",
      razao: "Segue você",
    },
    {
      imagem: "./media/img/chibirdart.svg",
      nome: "chibirdart",
      razao: "Segue você",
    },
    {
      imagem: "./media/img/razoesparaacreditar.svg",
      nome: "razoesparaacreditar",
      razao: "Novo no Instagram",
    },
    {
      imagem: "./media/img/adorable_animals.svg",
      nome: "adorable_animals",
      razao: "Segue você",
    },
    {
      imagem: "./media/img/smallcutecats.svg",
      nome: "smallcutecats",
      razao: "Segue você",
    },
  ];

  return (
    <div className="sugestoes">
      <div className="titulo">
        Sugestões para você
        <div>Ver tudo</div>
      </div>

      {sugestoes.map((objeto, index) => (
        <Sugestao imagem={objeto.imagem} nome={objeto.nome} razao={objeto.razao} key={index}/>
      ))}
    </div>
  );
}

function Sugestao(props) {
  return (
    <div className="sugestao">
      <div className="usuario">
        <img src={props.imagem} alt={props.nome}/>
        <div className="texto">
          <div className="nome">{props.nome}</div>
          <div className="razao">{props.razao}</div>
        </div>
      </div>

      <div className="seguir">Seguir</div>
    </div>
  );
}
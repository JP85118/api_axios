import './Card.css'

function Card({api}) {
  return (
    <>
    <div className="card">
      {api.map((item)=>(
        <div className="card-content">
          <h3 className="card_title">{item.name}</h3>
          <img className="card_img" src={item.sprites.other["official-artwork"].front_default} alt={item.name} />
        </div>
      ))}
    </div>
    </>
  )
}

export {Card}
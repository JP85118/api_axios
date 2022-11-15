

function PokeAPI({pokemonProps}) {
  return (
    <div>
      <h1>PokeApi</h1>
      <img src={pokemonProps.sprites.other['official-artwork'].front_default} alt={pokemonProps.name} />
      <h3>{pokemonProps.name}</h3>
      <p>{pokemonProps.base_experience}</p>
    </div>
  )
}

export {PokeAPI}
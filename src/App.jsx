import { useState, useEffect } from 'react'
import './App.css'
import { Title } from './Components/Title'
import { Card } from './Components/Card'
import { PokeAPI } from './Components/PokeAPI'


/* fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
.then((response) => response.json())
.then((data) => console.log(data))
.catch((error)=>console.log(error))
 */

/* function App() {

  const [characterId, setCharacterId] = useState(3);
  const [character, setCharacter] = useState([]);


  useEffect(()=>{
    getCharacter(characterId)
  },[character])

  const getCharacter = async (id)=>{
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${id}/`)
    const data = await response.json()
    //console.log(namePokemon);
    let pokemonArr = []

    let pokemonName = data.species.name
    let pokemonImage = await getCharacterImg(pokemonName)
    pokemonArr.push([pokemonName, pokemonImage])
    //console.log(pokemonArr);
    setCharacter(pokemonArr)
  }
  
  const getCharacterImg = async (name) =>{
    const response = await fetch (`https://pokeapi.co/api/v2/pokemon/${name}/`)
    const data = await response.json()
    return data.sprites.other['official-artwork'].front_default;
  }


  return (
    <div className="App">
      <Title text="Pokémon API"/>
      {character.map(item =>
        <Card 
        key={item[0]}
        name={item[0]}
        img={item[1]}
        />  
      )}
    </div>
  )
}

export default App */


/* function App() {

  const [pokemon, setPokemom] = useState([])
  const url = "https://pokeapi.co/api/v2/pokemon/ditto"

  useEffect(()=>{
    axios.get(url).then((res) => {
      console.log(res.data)
      setPokemom(res.data)
    })
  }, [])

  return (
    <>
    <PokeAPI 
    pokemonProps = {pokemon}
    />
    </>
  )
} */


function App() {

  const [pokemon, setPokemon] = useState([]);

  const pokemons = async () =>{
    const res = await axios.get("https://pokeapi.co/api/v2/pokemon/")
    //console.log(res);
    getPokemon(res.data.results)
  }

  const getPokemon = async (res) =>{
    res.map(async(item)=>{
      //console.log(item.url)
      const result = await axios.get(item.url)
      console.log(result.data)
      setPokemon(state=>{
        state=[...state,result.data]
        /* state.sort((a,b)=>a.id>b.id?1:-1) */
        return state
      })
    })
  }

  useEffect(()=>{
    console.log('Inico de useEffect');
    pokemons()
  },[])
  
  return (
    <>
    <Title text='Pokemon API '/>
    <Card api = {pokemon}/>
    </>
  )
}



export default App

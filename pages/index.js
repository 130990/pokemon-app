import Link from "next/link";

const Pokemon = ({pokemon}) => {
  const id = pokemon.url.split('/').filter(x=>x).pop()
  return ( 
    <li><Link href={`/pokemones/${id}`}>{pokemon.name}</Link></li>
   );
}

export default function Pokemones({pokemones}) {
  return (
    <div>
      <h1>My pokemon app</h1>
      {pokemones.map(pokemon=><Pokemon pokemon={pokemon} key={pokemon.name}/>)}
    </div>
    
  )
}

export const getStaticProps = async() =>{
  const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151')
  const data = await response.json()
  return{
    props:{
      pokemones: data.results
    }
  }
}
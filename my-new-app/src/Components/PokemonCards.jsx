import './PokemonCards.css'

const pokemonList = [
      {
        name: "bulbasaur",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        age: 20
      },
      {
        name: "charmander",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        age:21
      },
      {
        name: "squirtle",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        age:22
      },
      {
        name: "pikachu",
        imgSrc:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        age:23
      },
      {
        name: "mew",
        imgSrc:"https://www.pokepedia.fr/images/thumb/1/16/Mew-DEPS.png/1337px-Mew-DEPS.png?20230519142109",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        age:24
      }, 
      {
        name: "onix",
        imgSrc:"https://assets.pokemon.com/assets/cms2/img/pokedex/full/095.png",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",  
        age:25 
      },
      {
        name: "evoli",
        imgSrc:"https://i.etsystatic.com/40476184/r/il/79ce0c/4579891977/il_1588xN.4579891977_h0lo.jpg",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",   
        age:26
      },
      {
          name: "ronflex",
          imgSrc:"https://www.pokepedia.fr/images/2/2b/Ronflex-RFVF.png?20160901143337",
          description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
          age:27
      },
    ];


const PokemonCards = () =>{
    return  (
        <>
          {pokemonList.map((object) =>(
            <div key={object.name}>
            <figcaption>{object.name}</figcaption>
            <img src={object.imgSrc} alt={object.name} />
            <p id ="pokdescrib" >{object.description}</p>
            </div>  
          ))}   
           
        </>
    )}
         
export default PokemonCards
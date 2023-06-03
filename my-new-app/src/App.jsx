import { useState } from 'react'
import './App.css'
import './Components/Title'
import Title from './Components/Title'
import './Components/PokemonCards'
import PokemonCards from './Components/PokemonCards'



function App() {
  /*const [count, setCount] = useState(0)*/


  return (
    <>  
  <header>Code Qui Peut</header>
  <div id = "title"> <Title/> </div>
  <div className='PokemonContainer'><PokemonCards/> </div>
  
    </>
  )
}

export default App

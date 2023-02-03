import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)



  let campo =`lastName`
  const persona = {
  nombre : `federico`,
  email : `serg@gmail.com` ,
  [campo]:`Osandon`

  }

  const {nombre , email}= persona
  console.log(nombre,email)

  return (
    <nav className ='App'>
    <label> Catalogo </label>
    <p>Polos</p>
    <p>Shorts</p>
    <p>Camisas</p>
    <p>Pantalones</p>  
    </nav>

  )
}

export default App

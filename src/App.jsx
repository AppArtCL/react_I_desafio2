import { useState } from 'react'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [error, setError] = useState("Llena todos los campos");
  const actualizaError = (data) => {
    setError(data)
  }

  const [colorError, setColorError] = useState("dark");
  const actualizaColorError = (data) => {
    setColorError(data)
  }  

  return (
    <>
      <Registro error={error} enviaErrorApp={actualizaError} colorError={colorError} enviaColorErrorApp={actualizaColorError} />
    </>
  )
}

export default App

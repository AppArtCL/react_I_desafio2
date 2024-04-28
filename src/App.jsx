import { useState } from 'react'
import Registro from './components/Registro'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
  const [error, setError] = useState("");
  const [colorError, setColorError] = useState("");

  return (
    <>

      <Registro error={error} colorError={colorError} />

    </>
  )
}

export default App

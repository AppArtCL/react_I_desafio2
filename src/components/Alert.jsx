import { Alert as AlertBootstrap } from "react-bootstrap"

const Alert = ({error, colorError}) => {
  return (
    <>
    <AlertBootstrap className="alerta" variant={colorError} >{error}</AlertBootstrap>
    </>
  )
}

export default Alert
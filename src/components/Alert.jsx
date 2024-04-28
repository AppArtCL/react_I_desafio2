

const Alert = ({error, colorError}) => {
  return (
    <div>
        <div>Datos error</div>
        <div>{error}</div>
        <div>{colorError}</div>
    </div>
  )
}

export default Alert
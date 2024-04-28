import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Card from 'react-bootstrap/Card';


const Registro = ({ error, enviaErrorApp, colorError, enviaColorErrorApp }) => {
    const actualizaError = (data) => {
        enviaErrorApp(data);
    }

    const actualizaColorError = (data) => {
        enviaColorErrorApp(data);
    }

  return (
    <Card>
      <Card.Body>
        <p className="titulo">Crea una cuenta</p>
        <div className="botonesSociales">
          <SocialButton icono="fa-brands fa-facebook" />
          <SocialButton icono="fa-brands fa-github" />
          <SocialButton icono="fa-brands fa-linkedin-in" />
        </div>
        <p>O usa tu email para registrarte</p>
      </Card.Body>
      <Formulario actualizaErrorRegistro={actualizaError} actualizaColorErrorRegistro={actualizaColorError} />
      <Alert error={error} colorError={colorError} />
    </Card>
  );
};

export default Registro
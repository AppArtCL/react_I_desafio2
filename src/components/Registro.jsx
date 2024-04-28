import Alert from "./Alert";
import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Card from 'react-bootstrap/Card';


const Registro = ({error, colorError}) => {
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
      <Formulario error={error} colorError={colorError} />
      <Alert error={error} colorError={colorError} />
    </Card>
  );
};

export default Registro
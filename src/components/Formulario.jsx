import { useState } from "react"
import Button from "react-bootstrap/Button"
import { Form } from "react-bootstrap"

const Formulario = () => {
    const [validated, setValidated] = useState(false);
    const [formData, setFormData] = useState({
        nombre: "",
        email: "",
        password: "",
        confimaPassword: "",
    });
  
    const validarUsuario = (e) => {
        const form = e.currentTarget;
        if (form.checkValidity() === false) {
            e.preventDefault();
            e.stopPropagation();
        }
        setValidated(true);
    };    

    const funcionOnChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    return (
      <Form
        noValidate
        validated={validated}
        className="formulario"
        onSubmit={validarUsuario}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            type="text"
            name="nombre"
            placeholder="Nombre"
            value={formData.user}
            onChange={funcionOnChange}
            pattern="^[a-zA-Z0-9]+$"
            required
            isInvalid={validated && !/^[a-zA-Z0-9]+$/.test(formData.user)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            type="email"
            name="email"
            placeholder="tuemail@ejemplo.com"
            value={formData.email}
            onChange={funcionOnChange}
            required
            isInvalid={validated && !/^\S+@\S+\.\S+$/.test(formData.email)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="password"
            placeholder="Contraseña"
            value={formData.password}
            onChange={funcionOnChange}
            minLength={6}
            required
            isInvalid={validated && formData.password.length < 6}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Control
            type="password"
            name="confimaPassword"
            placeholder="Confirma tu contraseña"
            value={formData.confimaPassword}
            onChange={funcionOnChange}
            minLength={6}
            required
            pattern={formData.password}
            isInvalid={validated && formData.confimaPassword !== formData.password}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Registrarse
        </Button>
      </Form>
    );
}

export default Formulario
import { Container, Form } from "./styles";
// import notasImg from "../assets/notas_musicais.png";

export function Login() {
  return (
    <>
      <Container>
        {/* <img src={notasImg} alt="Moda" /> */}
        <Form action="">
          <span id="acesso">Acesso</span>

          <label htmlFor="">E-mail: </label>
          <input placeholder="Digite seu e-mail"></input>

          <label htmlFor="">Senha: </label>
          <input type="password" placeholder="Digite sua senha"></input>
          <button>Entrar</button>

          <span id="esqueceuSenha">Esqueceu a senha?</span>
        </Form>
      </Container>
    </>
  );
}

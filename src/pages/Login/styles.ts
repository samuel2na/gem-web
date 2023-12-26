import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme["gray-100"]};
`;

export const Form = styled.form`
  width: 20rem;
  margin-top: 6rem;

  #acesso {
    display: flex;
    justify-content: center;
    margin-bottom: 2rem;
    color: ${(props) => props.theme["green-300"]};
    font-size: 1.8rem;
  }

  #esqueceuSenha {
    color: ${(props) => props.theme["green-500"]};
    display: flex;
    justify-content: right;
    margin-top: 1.5rem;

    &:hover {
      color: ${(props) => props.theme["green-700"]};
      transition: background-color 0.3s;
      cursor: pointer;
    }
  }

  input {
    padding: 0.5rem;
    width: 100%;
    margin-bottom: 10px;
    border-radius: 5px;
    border: 0;
  }

  button {
    width: 100%;
    padding: 0.5rem;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    background-color: ${(props) => props.theme["green-500"]};
    color: ${(props) => props.theme.white};

    &:hover {
      background: ${(props) => props.theme["green-700"]};
      transition: background-color 0.3s;
    }
  }
`;

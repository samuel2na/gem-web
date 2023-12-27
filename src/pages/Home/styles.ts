import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  /* max-width: 1120px; */

  margin: 4rem auto 0; /* 4 em cima | auto nas laterais | 0 embaixo */
  padding: 0 1.5rem; /* espaçamento nas laterais */
`;

export const HomeTable = styled.table`
  width: 100%;
  border-collapse: separate; /* usando essa opção permite usar a opção abaixo que da um espaço entre as linhas */
  border-spacing: 0 0.5rem;
  /* margin-top: 1.5rem; */

  thead > tr > th {
    &:first-child {
      width: 30%;
    }
  }

  thead > tr {
    th:nth-child(n+2) {
      width: 3%;
    }
  }

  tbody > tr {
    td:nth-child(n+2) {
      text-align: center;
    }
  } 

  td {
    padding: 0.5rem 0.5rem;
    background: ${(props) => props.theme["gray-700"]};


    &:first-child {
      border-top-left-radius: 6px;
      border-bottom-left-radius: 6px;
    }

    &:last-child {
      border-top-right-radius: 6px;
      border-bottom-right-radius: 6px;
    }
  }
`;

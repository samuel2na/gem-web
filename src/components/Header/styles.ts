import styled from "styled-components";

type PropsStyle = {
  visible: boolean;
};

export const HeaderContainer = styled.div`
  width: 100%;
`;

export const HeaderContent = styled.div`
  background-color: ${(props) => props.theme["gray-900"]};
  padding: 1rem;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const HeaderLeft = styled.div<PropsStyle>`
  //height: 2rem;

  span {
    display: ${({ visible }) => (visible === true ? "" : "none")};
  }

  button {
    width: 2.5rem;
    //height: 2rem;
    border-radius: 5px;
    border: 0;
    cursor: pointer;
    background-color: ${(props) => props.theme["red-500"]};
    color: ${(props) => props.theme.white};
    margin-left: 0.5rem;
    display: ${({ visible }) => (visible === true ? "" : "none")};

    &:hover {
      background: ${(props) => props.theme["red-700"]};
      transition: background-color 0.3s;
    }
  }
`;

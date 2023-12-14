import { HeaderContainer, HeaderContent, HeaderLeft } from "./styles";

type HeaderProps = {
  visible: boolean;
};

export function Header({ visible = false }: HeaderProps) {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div>GEM - Eng. Goulart</div>

        <HeaderLeft visible={visible}>
          <span>Nome usuário</span>
          <button>Sair</button>
        </HeaderLeft>
      </HeaderContent>
    </HeaderContainer>
  );
}

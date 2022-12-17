
// Styles
import * as S from "./styles";

// interface
interface IButton {
  children: string;
  onPress: () => void;
}
export function Button({ onPress, children }: IButton) {
  return (
    <S.Container onPress={onPress}>
      <S.Text>
        { children }
      </S.Text>
    </S.Container>
  )
}
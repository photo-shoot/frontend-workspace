import * as S from "./LayoutHeader.styles";
import { ILayoutHeaderUI } from "./LayoutHeader.types";

export default function LayoutHeaderUI(props: ILayoutHeaderUI) {
  return (
    <S.Wrapper>
      <S.HeaderTop>
        <S.Join onClick={props.onClickJoinBtn}>회원가입</S.Join>
        <S.Login>로그인</S.Login>
      </S.HeaderTop>
      <S.HeaderBottom>
        <S.Border />
        <S.Logo src="/layout/Logo.png" />
        <S.Border />
      </S.HeaderBottom>
    </S.Wrapper>
  );
}

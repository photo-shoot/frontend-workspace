import * as S from "./LayoutHeader.styles";

export default function LayoutHeaderUI() {
  return (
    <S.Wrapper>
      <S.HeaderTop>
        <S.Join>회원가입</S.Join>
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

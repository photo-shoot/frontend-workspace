import LayoutHeader from "../../../commons/layout/header/LayoutHeader.container";
import * as S from "./login.styles";
import { ILoginPageComponentUI } from "./login.types";

export default function LoginPageComponentUI(props: ILoginPageComponentUI) {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <S.Title src="/pages/login/loginTitle.png" />
      <S.InputWrapper>
        <S.Email onChange={props.onChangeEmail} placeholder="이메일" />
        <S.ErrorMessage>{props.emailError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.InputWrapper>
        <S.Password onChange={props.onChangePassword} typeof="password" placeholder="비밀번호" />
        <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
      </S.InputWrapper>
      <S.SignInBtn type="primary" onClick={props.onClickSignIn}>
        로그인
      </S.SignInBtn>
      <S.EasyLoginWrapper>
        <S.EasyLoginBtn src="/pages/login/kakaoLogin.png" />
        <S.EasyLoginBtn src="/pages/login/naverLogin.png" />
      </S.EasyLoginWrapper>
    </S.Wrapper>
  );
}

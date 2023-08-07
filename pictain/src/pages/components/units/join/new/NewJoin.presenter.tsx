import LayoutHeader from "../../../../commons/layout/header/LayoutHeader.container";
import * as S from "./NewJoin.styles";
import { Form } from "antd";
import { INewJoinPageComponentUI } from "./NewJoin.types";
import { Fragment } from "react";

export default function NewJoinPageComponentUI(props: INewJoinPageComponentUI) {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <S.userContainer>
        <S.User src="/pages/join/User.png" />
        {!props?.isUserData && (
          <Fragment>
            <S.InputWrapper>
              <S.Email onChange={props.onChangeEmail} placeholder="이메일" />
              <S.ErrorMessage>{props.emailError}</S.ErrorMessage>
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Password
                onChange={props.onChangePassword}
                type="password"
                placeholder="비밀번호"
              />
              <S.ErrorMessage>{props.passwordError}</S.ErrorMessage>
            </S.InputWrapper>
          </Fragment>
        )}
        <S.InputWrapper>
          <S.Nickname placeholder="닉네임" onChange={props.onChangeNickname} />
          <S.ErrorMessage>{props.nicknameError}</S.ErrorMessage>
        </S.InputWrapper>
        <Form layout="horizontal">
          <S.RadioGroup onChange={props.onChangeRadioBtn}>
            <S.radioButton value="MEMBER">손님</S.radioButton>
            <S.radioButton value="">관리자</S.radioButton>
            <S.ErrorMessage>{props.isMemberError}</S.ErrorMessage>
          </S.RadioGroup>
        </Form>
        <S.SubmitBtn type="primary" onClick={props.onClickSubmit}>
          등록하기
        </S.SubmitBtn>
      </S.userContainer>
    </S.Wrapper>
  );
}

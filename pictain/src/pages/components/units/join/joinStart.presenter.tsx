import { AiOutlineMail } from "react-icons/ai";
import * as S from "./joinStart.styles";
import { IJoinStartPageComponentUI } from "./joinStart.types";
import LayoutHeader from "../../../commons/layout/header/LayoutHeader.container";

export default function JoinStartPageComponentUI(props: IJoinStartPageComponentUI) {
  return (
    <S.Wrapper>
      <LayoutHeader />
      <S.ContentsContainer>
        <S.Logo src="/layout/Logo.png" />
        <S.JoinButton src="/pages/join/kakaoJoin.png" id="kakao" onClick={props.onClickNewJoin} />
        <S.JoinButton src="/pages/join/naverJoin.jpg" id="naver" onClick={props.onClickNewJoin} />
        <S.EmailJoinButton id="new" onClick={props.onClickNewJoin}>
          <AiOutlineMail size="22" />
          이메일로 시작하기
        </S.EmailJoinButton>
      </S.ContentsContainer>
    </S.Wrapper>
  );
}

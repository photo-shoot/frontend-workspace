import * as S from "./Inform.styles";

export default function MainInFormUI() {
  return (
    <S.Wrapper>
      <S.Title>Problem?</S.Title>
      <S.contents>예쁜 사진을 찍기 전에 무엇을 먼저 하시나요?</S.contents>
      <S.contents>여러 검색어로 수 많은 블로그와 sns를 찾아보시지 않나요?</S.contents>
      <S.contents>카톡, 인스타, 쇼핑몰.. 사진촬영 예약 방식이 다양하지 않나요?</S.contents>
      <S.IconsWrapper>
        <S.IconContainer>
          <S.Icon src="pages/Main/icon1.png" />
          <S.IconContents>한 곳에서</S.IconContents>
          <S.IconContents>유익한 정보</S.IconContents>
        </S.IconContainer>
        <S.IconContainer>
          <S.Icon src="pages/Main/icon2.png" />
          <S.IconContents>작업실이 없는</S.IconContents>
          <S.IconContents>사진작가를 쉽게 예약</S.IconContents>
        </S.IconContainer>
        <S.IconContainer>
          <S.Icon src="pages/Main/icon3.png" />
          <S.IconContents>편리한</S.IconContents>
          <S.IconContents>문의 및 예약</S.IconContents>
        </S.IconContainer>
      </S.IconsWrapper>
      <S.DivideLine />
    </S.Wrapper>
  );
}

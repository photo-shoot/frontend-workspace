import * as S from "./Review.styles";
// import Hot3Components from "./components/Hot3Components.container";

const CommunityComponent = [
  { Comment: "수원 00사진관 사진맛집!", User: "회원 닉네임", heartRate: 300, bookMark: 100 },
  { Comment: "수원 00사진관 사진맛집!", User: "회원 닉네임", heartRate: 300, bookMark: 100 },
  { Comment: "수원 00사진관 사진맛집!", User: "회원 닉네임", heartRate: 300, bookMark: 100 },
];

export default function MainReviewUI() {
  return (
    <S.Wrapper>
      <S.Title>와글와글</S.Title>
      <S.ComponentsWrapper>
        {CommunityComponent.map((el, index) => (
          <S.Container key={index}>
            <S.Thumbnail />
            <S.ContentWrapper>
              <S.Comment>{el.Comment}</S.Comment>
              <S.UserContainer>
                <S.UserImg />
                <S.User>{el.User}</S.User>
              </S.UserContainer>
              <S.Reaction>
                <S.Icon src="/pages/Main/heart.png" />
                <S.Rate>{el.heartRate}</S.Rate>
                <S.Icon src="/pages/Main/star.png" />
                <S.Rate>{el.bookMark}</S.Rate>
              </S.Reaction>
            </S.ContentWrapper>
          </S.Container>
        ))}
      </S.ComponentsWrapper>
    </S.Wrapper>
  );
}

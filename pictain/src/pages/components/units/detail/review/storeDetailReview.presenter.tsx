import * as S from "./storeDetailReview.styles";

export default function StoreDetailReviewComponentUI() {
  const REVIEW = [
    { review_id: 1, reviewer_id: 1, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 2, reviewer_id: 2, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 3, reviewer_id: 3, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 4, reviewer_id: 4, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 5, reviewer_id: 5, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 6, reviewer_id: 6, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
    { review_id: 7, reviewer_id: 7, review_content: "자연스럽고 예쁘게 찍어주셨어요!" },
  ];
  return (
    <S.Wrapper>
      {REVIEW.map((el) => (
        <S.ReviewContainer key={el.review_id}>
          <S.UserWrapper>
            <S.UserProfileImg />
            <S.UserNickname>{el.reviewer_id}</S.UserNickname>
          </S.UserWrapper>
          <S.ReviewContents>{el.review_content}</S.ReviewContents>
          <S.ReviewImgContainer>
            <S.ReviewImg />
            <S.ReviewImg />
            <S.ReviewImg />
          </S.ReviewImgContainer>
        </S.ReviewContainer>
      ))}
    </S.Wrapper>
  );
}

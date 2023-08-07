import * as S from "./storeDetail.styles";
import { HeartFilled, StarFilled } from "@ant-design/icons";
import { Fragment } from "react";
import { IStoreDetailPageComponentUI } from "./storeDetail.types";

export default function StoreDetailPageComponentUI(props: IStoreDetailPageComponentUI) {
  const NAVIGATION_MANUS = [
    { name: "상세설명", page: "/detail/inform" },
    { name: "가격", page: "/detail/price" },
    { name: "리뷰", page: "/detail/review" },
  ];

  return (
    <S.Wrapper>
      <S.Title>사진관 이름</S.Title>
      <S.profile>
        <S.profileImageName />
        <S.profileDetail>
          <S.Detail>수원시 팔달구 아주로 어쩌고...</S.Detail>
          <S.Detail>아주대학교 도보 5km</S.Detail>
          <S.Detail>태그</S.Detail>
          <S.RateContainer>
            <div>
              <HeartFilled style={{ color: "#FFD2D2", fontSize: "30px" }} />
            </div>
            <S.RateContents>좋아요</S.RateContents>
            <div>
              <StarFilled style={{ color: "#FFEE95", fontSize: "30px" }} />
            </div>
            <S.RateContents>스크랩</S.RateContents>
          </S.RateContainer>
          <S.DetailBottom>
            <S.ChatBtn>1 : 1 채팅</S.ChatBtn>
            <S.BookBtn>예약하기</S.BookBtn>
          </S.DetailBottom>
        </S.profileDetail>
      </S.profile>
      <S.NavigationWrapper>
        {NAVIGATION_MANUS.map((el) => (
          <Fragment key={el.page}>
            <S.MenuItem id={el.page} onClick={props.onClickMenu}>
              {el.name}
            </S.MenuItem>
          </Fragment>
        ))}
      </S.NavigationWrapper>
    </S.Wrapper>
  );
}

import { Fragment } from "react";
import * as S from "./StudioComponent.styles";

export default function StudioPageComponentUI() {
  const categories = [
    { name: "전체" },
    { name: "웨딩" },
    { name: "졸업" },
    { name: "증명" },
    { name: "취업" },
    { name: "우정" },
    { name: "프로필" },
    { name: "기타" },
  ];

  return (
    <S.Wrapper>
      <S.WrapperHeader>
        <S.SearchBar>
          <S.search placeholder="검색어를 입력하세요" />
          <S.SearchIcon />
        </S.SearchBar>
      </S.WrapperHeader>
      <S.Title>사진관</S.Title>
      <S.CategoriesContainer>
        {categories.map((el) => (
          <Fragment key={el.name}>
            <S.Category>{el.name}</S.Category>
          </Fragment>
        ))}
      </S.CategoriesContainer>
    </S.Wrapper>
  );
}

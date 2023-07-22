import { Fragment } from "react";
import * as S from "./Hot3.styles";

const NAVIGATION = [
  { name: "사진관", page: "Studio" },
  { name: "사진작가", page: "Photographer" },
];

const ComponentContent = [
  {
    thumbnail: "/layout/banner.01.jpg",
    name: "사진관",
    address: "수원시 팔달구 우만동",
    tag: "#태그",
  },
  {
    thumbnail: "/layout/banner.01.jpg",
    name: "사진관",
    address: "수원시 팔달구 우만동",
    tag: "#태그",
  },
  {
    thumbnail: "/layout/banner.01.jpg",
    name: "사진관",
    address: "수원시 팔달구 우만동",
    tag: "#태그",
  },
];

export default function MainHot3UI() {
  return (
    <S.Wrapper>
      <S.Title>Hot3</S.Title>
      <S.NavigationContainer>
        {NAVIGATION.map((el) => (
          <Fragment key={el.page}>
            <S.NavigationItem id={el.page}>{el.name}</S.NavigationItem>
          </Fragment>
        ))}
      </S.NavigationContainer>
      <S.ComponentsWrapper>
        {ComponentContent.map((el, index) => (
          <S.Container key={index}>
            <S.Thumbnail src={el.thumbnail} />
            <S.Name>{el.name}</S.Name>
            <S.Address>{el.address}</S.Address>
            <S.Tag>{el.tag}</S.Tag>
          </S.Container>
        ))}
      </S.ComponentsWrapper>
      <S.DivideLine />
    </S.Wrapper>
  );
}

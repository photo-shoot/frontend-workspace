import * as S from "./StoreComponents.styles";
import { IStoreComponentUI } from "./StoreComponents.types";

export default function StoreComponentsUI(props: IStoreComponentUI) {
  //사진관, 사진작가 store api받아서 띄우기
  const ComponentContent = [
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
    {
      thumbnail: "/layout/banner.01.jpg",
      name: "사진관",
      address: "수원시 팔달구 우만동",
      short_intro: "한줄 소개",
      like: 300,
      scrap: 100,
    },
  ];

  // sort기능 구현해보기..!
  const SortOption = [
    { value: "recommend", label: "추천순" },
    { value: "latest", label: "최신순" },
  ];

  return (
    <S.Wrapper>
      <S.SortCascader options={SortOption} placeholder="정렬기준" />
      <S.ComponentsWrapper>
        {ComponentContent.map((el, index) => (
          <S.Container key={index}>
            <S.Thumbnail src={el.thumbnail} />
            <S.Name>{el.name}</S.Name>
            {!props.isPhotographer && <S.Address>{el.address}</S.Address>}
            <S.short_intro>{el.short_intro}</S.short_intro>
            <S.Reaction>
              <S.Icon src="/pages/Main/heart.png" />
              <S.Rate>{el.like}</S.Rate>
              <S.Icon src="/pages/Main/star.png" />
              <S.Rate>{el.scrap}</S.Rate>
            </S.Reaction>
          </S.Container>
        ))}
      </S.ComponentsWrapper>
      <S.ComponentBottom>
        <S.PrevPage onClick={props.onClickPrevPage}>{`< 이전페이지`}</S.PrevPage>
        <S.NextPage onClick={props.onClickNextPage}>{`다음페이지 >`}</S.NextPage>
      </S.ComponentBottom>
    </S.Wrapper>
  );
}

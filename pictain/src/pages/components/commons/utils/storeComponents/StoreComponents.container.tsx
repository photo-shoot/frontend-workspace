import { useState } from "react";
import { useRouter } from "next/router";
import StoreComponentsUI from "./StoreComponents.presenter";
import { IStoreComponent } from "./StoreComponents.types";

export default function StoreComponents(props: IStoreComponent) {
  const [startPage, setStartPage] = useState(1);

  const onClickNextPage = () => {
    setStartPage((prev) => prev + 10);
    console.log(setStartPage);
    // 페이지 버튼 누를때 마다 refetch해서 불러오기
  };

  const onClickPrevPage = () => {
    setStartPage((prev) => prev - 10);
    console.log(setStartPage);
    // 페이지 버튼 누를때 마다 refetch해서 불러오기
  };
  return (
    <StoreComponentsUI
      onClickNextPage={onClickNextPage}
      onClickPrevPage={onClickPrevPage}
      isPhotographer={props.isPhotographer}
    />
  );
}

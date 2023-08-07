import { useState } from "react";
import { useRouter } from "next/router";
import StoreComponentsUI from "./StoreComponents.presenter";

export default function StoreComponents() {
  const router = useRouter();
  console.log(typeof router.asPath);

  const [isStudio, setIsStudio] = useState(false);
  if (router.asPath == "/store/studio") {
    setIsStudio(true);
  } else {
    setIsStudio(false);
  }
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
      isStudio={isStudio}
    />
  );
}

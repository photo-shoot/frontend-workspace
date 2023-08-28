import StoreDetailPageComponentUI from "./storeDetail.presenter";
import { MouseEvent, useState } from "react";
import StoreDetailInformComponent from "./inform/storeDetailInform.container";
import StoreDetailPriceComponent from "./price/storeDetailPrice.container";
import StoreDetailReviewComponent from "./review/storeDetailReview.container";

export default function StoreDetailPageComponent() {
  const [userState, setUserState] = useState("inform");

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    setUserState(event.currentTarget.id);
  };
  return (
    <>
      <StoreDetailPageComponentUI onClickMenu={onClickMenu} />;
      {userState == "inform" && <StoreDetailInformComponent />}
      {userState == "price" && <StoreDetailPriceComponent />}
      {userState == "review" && <StoreDetailReviewComponent />}
    </>
  );
}

import { useRouter } from "next/router";
import StoreDetailPageComponentUI from "./storeDetail.presenter";
import { MouseEvent } from "react";

export default function StoreDetailPageComponent() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return <StoreDetailPageComponentUI onClickMenu={onClickMenu} />;
}

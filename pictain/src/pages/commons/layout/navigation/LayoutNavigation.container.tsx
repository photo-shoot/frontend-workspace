import { useRouter } from "next/router";
import LayoutNavigationUI from "./LayoutNavigation.presenter";
import { MouseEvent } from "react";

export default function LayoutNavigation() {
  const router = useRouter();

  const onClickMenu = (event: MouseEvent<HTMLDivElement>) => {
    router.push(event.currentTarget.id);
  };
  return <LayoutNavigationUI onClickMenu={onClickMenu} />;
}

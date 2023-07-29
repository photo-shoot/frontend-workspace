import { useRouter } from "next/router";
import LayoutHeaderUI from "./LayoutHeader.presenter";

export default function LayoutHeader() {
  const router = useRouter();
  const onClickJoinBtn = () => {
    router.push("/join");
  };
  return <LayoutHeaderUI onClickJoinBtn={onClickJoinBtn} />;
}

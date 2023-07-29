import { useState } from "react";
import NewJoinPageComponent from "../../../components/units/join/new/NewJoin.container";
import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  height: 1024px;
  position: relative;
`;
export const BackGroundImg = styled.img`
  position: absolute;
  z-index: -1;
  top: 0px;
  left: 0px;
`;
export default function EasyJoinPage() {
  const [isUserData, setIsUserData] = useState(true);
  //사용자 데이터 가져와서 props로 넘겨주기..?

  return (
    <Wrapper>
      <NewJoinPageComponent isUserData={isUserData} />;
      <BackGroundImg src="/pages/join/joinBackground.png" />
    </Wrapper>
  );
}

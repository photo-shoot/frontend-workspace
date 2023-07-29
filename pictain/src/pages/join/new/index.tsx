import NewJoinPageComponent from "../../components/units/join/new/NewJoin.container";
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
export default function NewJoinPage() {
  return (
    <Wrapper>
      <NewJoinPageComponent />;
      <BackGroundImg src="/pages/join/joinBackground.png" />
    </Wrapper>
  );
}

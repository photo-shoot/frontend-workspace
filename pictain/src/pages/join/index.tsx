import styled from "@emotion/styled";
import JoinStartPageComponent from "../components/units/join/joinStart.container";

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

export default function joinPage() {
  return (
    <Wrapper>
      <JoinStartPageComponent />
      <BackGroundImg src="/pages/join/joinBackground.png" />
    </Wrapper>
  );
}

import styled from "@emotion/styled";
import LoginPageComponent from "../components/units/login/login.container";

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

export default function LoginPage() {
  return (
    <Wrapper>
      <LoginPageComponent />
      <BackGroundImg src="/pages/join/joinBackground.png" />
    </Wrapper>
  );
}

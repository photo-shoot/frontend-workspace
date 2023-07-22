import LayoutFooter from "./Footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";

const LayoutWrapper = styled.div`
  width: 1440px;
  height: 1024px;
  display: flex;
  flex-direction: column;
`;

const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface ILayoutProps {
  children: JSX.Element;
}

export default function Layout(props: ILayoutProps) {
  return (
    <LayoutWrapper>
      <LayoutHeader />
      <LayoutNavigation />
      <LayoutBanner />
      <Body>{props.children}</Body>
      <LayoutFooter />
    </LayoutWrapper>
  );
}

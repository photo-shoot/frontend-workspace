import LayoutFooter from "./Footer/LayoutFooter.container";
import LayoutBanner from "./banner/LayoutBanner.container";
import LayoutHeader from "./header/LayoutHeader.container";
import LayoutNavigation from "./navigation/LayoutNavigation.container";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

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
  const router = useRouter();

  const HIDDEN_HEADERS = ["/join", "/login", `/join/new`, `/join/new/userId`];
  const isHiddenHeader = HIDDEN_HEADERS.includes(router.asPath);

  const HIDDEN_NAVIGATION = ["/join", "/login", `/join/new/userId`, `/join/new`];
  const isHiddenNavigation = HIDDEN_NAVIGATION.includes(router.asPath);

  const HIDDEN_BANNER = ["/join", "/login", `/join/new/userId`, `/join/new`, `/store/studio`, `/store/photographer`];
  const isHiddenBanner = HIDDEN_BANNER.includes(router.asPath);

  const HIDDEN_FOOTER = ["/join", "/login", `/join/new/userId`, `/join/new`];
  const isHiddenFooter = HIDDEN_FOOTER.includes(router.asPath);

  return (
    <LayoutWrapper>
      {!isHiddenHeader && <LayoutHeader />}
      {!isHiddenNavigation && <LayoutNavigation />}
      {!isHiddenBanner && <LayoutBanner />}
      <Body>{props.children}</Body>
      {!isHiddenFooter && <LayoutFooter />}
    </LayoutWrapper>
  );
}

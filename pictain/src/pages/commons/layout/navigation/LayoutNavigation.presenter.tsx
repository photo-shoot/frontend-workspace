import { MenuItem, Wrapper } from "./LayoutNavigation.styles";
import { Fragment } from "react";
import { ILayoutNavigationUIProps } from "./LayoutNavigation.types";

const NAVIGATION_MANUS = [
  { name: "사진관", page: "/Studio" },
  { name: "사진작가", page: "/Photographer" },
  { name: "와글와글", page: "/Community" },
  { name: "마이페이지", page: "/MyPage" },
];

export default function LayoutNavigationUI(props: ILayoutNavigationUIProps) {
  return (
    <Wrapper>
      {NAVIGATION_MANUS.map((el) => (
        <Fragment key={el.page}>
          <MenuItem id={el.page} onClick={props.onClickMenu}>
            {el.name}
          </MenuItem>
        </Fragment>
      ))}
    </Wrapper>

    // <Wrapper>
    //   <Studio>사진관</Studio>
    //   <Photographer>사진작가</Photographer>
    //   <Community>와글와글</Community>
    //   <MyPage>마이페이지</MyPage>
    // </Wrapper>
  );
}

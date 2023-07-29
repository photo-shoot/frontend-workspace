import { MouseEvent, useState } from "react";
import JoinStartPageComponentUI from "./joinStart.presenter";
import { useRouter } from "next/router";

export default function JoinStartPageComponent() {
  const router = useRouter();

  const onClickNewJoin = (event: MouseEvent<HTMLImageElement>) => {
    if (event.currentTarget.id == "kakao") {
      // 카카오사용자 데이터 받아와서 라우터하기
      router.push(`/join/new/userId`);
    } else if (event.currentTarget.id == "naver") {
      //네이버사용자 데이터 받아와서 라우터하기
      router.push(`/join/new/userId`);
    } else {
      //새로운 사용자 데이터 생성하기
      router.push(`/join/new`);
    }
  };

  return <JoinStartPageComponentUI onClickNewJoin={onClickNewJoin} />;
}

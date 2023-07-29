import styled from "@emotion/styled";
import LayoutHeader from "../../../commons/layout/header/LayoutHeader.container";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 250px;
`;

export const ContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.img`
  width: 363px;
  height: auto;
  margin-bottom: 129px;
`;

export const JoinButton = styled.img`
  width: 209px;
  height: 50px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 8px;
  background-color: #d9d9d9;
  cursor: pointer;
`;

export const EmailJoinButton = styled.div`
  width: 209px;
  height: 50px;
  border-radius: 5px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 17px;
  padding: 0 18px 0 10px;
  cursor: pointer;
`;


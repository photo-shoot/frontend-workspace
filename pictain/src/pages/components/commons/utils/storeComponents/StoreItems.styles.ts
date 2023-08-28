import styled from "@emotion/styled";
import { Cascader } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  padding: 0 100px;
`;

export const SortCascader = styled(Cascader)`
  width: 226px;
  font-size: 18px;
  border: #606060;
  color: #606060;
`;

export const ComponentsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 60px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thumbnail = styled.img`
  margin: 86px 0 61px 0;
  width: 274px;
  height: 274px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

export const Name = styled.div`
  font-size: 20px;
  color: #606060;
  line-height: 1.5rem;
`;

export const Address = styled.div`
  font-size: 20px;
  color: #606060;
  line-height: 1.5rem;
`;

export const short_intro = styled.div`
  font-size: 20px;
  color: #606060;
  line-height: 1.5rem;
`;

export const Reaction = styled.div`
  padding: 10px;
  margin-top: 12px;
  display: flex;
  align-items: center;
`;

export const Icon = styled.img`
  width: 25px;
  height: 22px;
  margin-right: 5px;
`;

export const Rate = styled.div`
  font-size: 12px;
  color: #606060;
  margin-right: 15px;
`;

export const ComponentBottom = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const NextPage = styled.div`
  font-size: 15px;
  color: #606060;
`;

export const PrevPage = styled.div`
  font-size: 15px;
  color: #606060;
`;

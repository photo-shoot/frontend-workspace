import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin: 145px 0 66px 0;
  font-family: "BMDOHYEON";
  font-size: 36px;
  color: #606060;
`;

export const NavigationContainer = styled.div`
  width: 100%;
  padding: 0 540px;
  display: flex;
  justify-content: space-around;
`;

export const NavigationItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 24px;
  color: #606060;
  cursor: pointer;
`;

export const ComponentsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  padding: 0 188px;
  margin-bottom: 154px;
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

export const Tag = styled.div`
  font-size: 20px;
  color: #606060;
  line-height: 1.5rem;
`;

export const DivideLine = styled.hr`
  width: 1115px;
  border-top: 1px solid #d9d9d9;
`;

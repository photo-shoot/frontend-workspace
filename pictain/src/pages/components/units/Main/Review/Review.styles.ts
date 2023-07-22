import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  margin: 145px 0 97px 0;
  font-family: "BMDOHYEON";
  font-size: 36px;
  color: #606060;
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
  margin-bottom: 30px;
  width: 281px;
  height: 303px;
  object-fit: cover;
  background-color: #d9d9d9;
  border: none;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
`;

export const Comment = styled.div`
  font-size: 28px;
  color: #606060;
`;

export const UserContainer = styled.div`
  margin-top: 17px;
  display: flex;
  align-items: center;
`;

export const UserImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: #d9d9d9;
`;

export const User = styled.div`
  font-size: 20px;
  color: #606060;
  margin-left: 14px;
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

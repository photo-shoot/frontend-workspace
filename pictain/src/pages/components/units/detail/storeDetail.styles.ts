import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 110px 146px 0 146px;
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  font-family: "BMDOHYEON";
  font-size: 40px;
  color: #606060;
  width: 100%;
`;

export const profile = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  align-items: center;
`;

export const profileImageName = styled.div`
  height: 276px;
  width: 276px;
  margin-top: 87px;
  margin-right: 137px;
  border-radius: 50%;
  object-fit: cover;
  background-color: #d9d9d9;
`;

export const profileDetail = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 90px;
`;

export const Detail = styled.div`
  font-size: 24px;
  color: #606060;
  margin-bottom: 14px;
`;

export const RateContainer = styled.div`
  display: flex;
  align-items: center;
`;
export const RateContents = styled.div`
  font-size: 15px;
  color: #606060;
  padding-left: 5px;
  padding-right: 15px;
`;

export const DetailBottom = styled.div`
  display: flex;
  align-items: center;
  margin-top: 22px;
`;

export const ChatBtn = styled.button`
  width: 186px;
  height: 57px;
  background-color: #dff2ff;
  border-radius: 30px;
  border: none;
  color: #606060;
  font-size: 20px;
  margin-right: 12px;
`;

export const BookBtn = styled.button`
  width: 186px;
  height: 57px;
  background-color: #ffe2e2;
  border-radius: 30px;
  border: none;
  color: #606060;
  font-size: 20px;
`;

export const NavigationWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 146px;
  padding-bottom: 150px;
  /* margin-bottom: 10px; */
`;

export const MenuItem = styled.div`
  font-size: 24px;
  color: #606060;
  cursor: pointer;
`;

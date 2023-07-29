import styled from "@emotion/styled";
import { Button } from "antd";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.img`
  width: 180px;
  height: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 42px;
  margin-bottom: 10px;
`;

export const ErrorMessage = styled.div`
  margin-top: 5px;
  font-size: 14px;
  color: red;
`;

export const Email = styled.input`
  width: 219px;
  border: none;
  border-bottom: 1px solid #606060;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;

export const Password = styled.input`
  width: 219px;
  border: none;
  border-bottom: 1px solid #606060;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;

export const SignInBtn = styled(Button)`
  width: 209px;
  height: 49px;
  font-size: 16px;
  font-weight: 300;
  color: #606060;
  background-color: #ffe2e2;
  border: none;
`;

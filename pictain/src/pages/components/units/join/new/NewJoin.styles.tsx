import styled from "@emotion/styled";
import { Radio, Button } from "antd";

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 250px;
`;

export const userContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const User = styled.img`
  width: 243px;
  height: 249px;
  margin-bottom: 77px;
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

export const Nickname = styled.input`
  width: 219px;
  border: none;
  border-bottom: 1px solid #606060;
  font-size: 14px;

  :focus {
    outline: none;
  }
`;

export const RadioGroup = styled(Radio.Group)`
  height: 59px;
`;

export const radioButton = styled(Radio.Button)`
  font-size: 14px;
  color: #606060;
`;

export const SubmitBtn = styled(Button)`
  width: 209px;
  height: 49px;
  font-size: 16px;
  font-weight: 300;
  color: #606060;
  background-color: #dff2ff;
  border: none;
`;

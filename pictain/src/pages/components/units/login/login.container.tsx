import { ChangeEvent, useState } from "react";
import LoginPageComponentUI from "./login.presenter";
import axios from "axios";

export default function LoginPageComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const onChangeEmail = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.currentTarget.value);
    if (event.currentTarget.value !== "") {
      setEmailError(" ");
    }
  };

  const onChangePassword = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.currentTarget.value);
    if (event.currentTarget.value !== "") {
      setPasswordError(" ");
    }
  };

  const onClickSignIn = async () => {
    if (!email) {
      setEmailError("이메일을 입력해주세요.");
    }
    if (!password) {
      setPasswordError("비밀번호를 입력해주세요.");
    }
    if (email && password) {
      console.log(`${email}, ${password}`);
    }
  };

  return (
    <LoginPageComponentUI
      onChangeEmail={onChangeEmail}
      onChangePassword={onChangePassword}
      emailError={emailError}
      passwordError={passwordError}
      onClickSignIn={onClickSignIn}
    />
  );
}

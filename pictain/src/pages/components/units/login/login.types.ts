import { ChangeEvent } from "react";

export interface ILoginPageComponentUI {
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  emailError: string;
  passwordError: string;
  onClickSignIn: () => void;
}

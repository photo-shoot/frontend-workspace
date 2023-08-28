import { RadioChangeEvent } from "antd";
import { ChangeEvent } from "react";

export interface INewJoinPageComponentUI {
  isUserData?: boolean;
  onChangeEmail: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeNickname: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeRadioBtn: (event: RadioChangeEvent) => void;
  emailError: string;
  passwordError: string;
  nicknameError: string;
  isMemberError: string;
  onClickSubmit: () => void;
  ToggleModal: () => void;
  isModalOpen: boolean;
}

export interface INewJoinPageComponent {
  isUserData?: boolean;
}

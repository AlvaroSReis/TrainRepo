
export interface ValidInputsRequestAccount {
  image: string | null;
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ValidInputsLogin {
  email: string;
  password: string;
}

export interface ValidInputsType {
  name: string;
  type: string;
}

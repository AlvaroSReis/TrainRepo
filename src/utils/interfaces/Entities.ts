
export interface Admin {
  token: string
}

export interface AdminClient {
  idAdmin: string;
  name: string;
  email: string;
  password: string;
  validatedBy: string | null;
  evaluated: boolean,
  granted: boolean,
  createdAt: Date;
  updatedAt: Date;
}

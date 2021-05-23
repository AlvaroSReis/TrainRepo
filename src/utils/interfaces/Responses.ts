export interface ResponseForUser {
  status: boolean;
  message?: string;
  token?: string;
}

export interface ResponseClient {
  code: number,
  token?: string,
}

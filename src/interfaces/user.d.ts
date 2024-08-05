declare interface Iuser {
  _id: string;
  saved: any[];
  name: string;
  email: string;
  createdAt: string;
  scope: "user" | "admin";
}

declare interface OauthIuser {
  email: string;
  picture: string | undefined;
  name: string;
  exp: Date;
  expires_in: Date;
}

declare interface UserTokenInfo {
  iss: string;
  sub: string;
  accountId: string;
  exp: number;
  iat: number;
  scope: string;
  account_name?: string;
}

declare interface UserState {
  token: string | null;
  userType: null | "google_user" | "app_user";
  refresh_token: null | string;
  userInfo: UserTokenInfo | null;
}
declare type TypeAssignment = {
  id: string;
  subject: string;
  deadline: string;
  reference: string;
  phone: string;
  description: string;
  type: string;
  assignment_name: string;
  customer_id: string;
  customer_email: string;
  pageOrWord: number;
  file_name: string | null;
  create_time: number;
};

export interface IAccessToken {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  isEmailVerified: boolean;
  imgUrl: string;
}

export interface IRefreshToken {
  id: string;
}

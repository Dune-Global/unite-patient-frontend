export const handleLoginResponse = (response: any) => {
  const { refreshToken, accessToken } = response.data;

  localStorage.setItem("REFRESHTOKEN", `Bearer ${refreshToken}`);

  sessionStorage.setItem("ACCESSTOKEN", `Bearer ${accessToken}`);
};

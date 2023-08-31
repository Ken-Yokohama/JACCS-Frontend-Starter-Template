export const setToken = (accessToken: string, refreshToken: string) => {
  window.localStorage.setItem('jaccsTKN', accessToken)
  window.localStorage.setItem('jaccsTKNRefresh', refreshToken)

  return accessToken
}

export const getToken = () => window.localStorage.getItem('jaccsTKN')

export const getRefreshToken = () => window.localStorage.getItem('jaccsTKNRefresh')

export const deleteToken = () => {
  return window.localStorage.clear()
  // return window.localStorage.removeItem("jaccsTKN");
}

export const backToLoginPage = () => {
  deleteToken()
  window.location.href = '/'
}

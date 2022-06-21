export const saveToken = (token) =>
  localStorage.setItem('token', token)

  export const getToken = () =>
  localStorage.getItem('token')

  export const saveRole = (role) =>
  localStorage.setItem('role', role)

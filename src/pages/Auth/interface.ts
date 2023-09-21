export interface Auth {
  email: string
  password: string
  role: string
}
export interface ResetPassword {
  email: string
}
export interface NewPassword {
  newPassword: string
  confirmPassword: string
}

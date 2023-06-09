export interface AuthInterface {
  login(email: string, password: string);
  signUp(email: string, password: string);
  changePassword(email: string, password: string, oldPassword: string);
}

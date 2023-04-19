export interface UserInterface {
  login(username: string, password: string);
  signUp(username: string, password: string);
  changePassword(username: string, password: string, oldPassword: string);
}

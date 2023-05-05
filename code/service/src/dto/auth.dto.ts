import { Auth } from 'models/Auth';

export interface ChangePasswordDTO extends Omit<Auth, 'old_password'> {
  oldPassword: string;
}

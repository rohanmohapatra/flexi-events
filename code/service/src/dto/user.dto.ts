import { User } from 'models/User';

export interface ChangePasswordDTO extends Omit<User, 'old_password'> {
  oldPassword: string;
}

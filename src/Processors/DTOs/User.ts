export class UserRegister {
  readonly name: string;
  readonly email: string;
  readonly birthday: number;
  readonly password: string;
}

export class UserLogin {
  readonly email: string;
  readonly password: string;
}
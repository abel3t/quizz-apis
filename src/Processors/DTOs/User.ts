import { ApiProperty } from '@nestjs/swagger';

export class UserRegister {
  @ApiProperty()
  readonly name: string;

  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly birthday: number;

  @ApiProperty()
  readonly password: string;
}

export class UserLogin {
  @ApiProperty()
  readonly email: string;

  @ApiProperty()
  readonly password: string;
}
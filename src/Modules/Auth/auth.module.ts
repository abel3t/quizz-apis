import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { userProviders } from './auth.provider';

@Module({
  imports: [],
  controllers: [
    AuthController
  ],
  providers: [
    ...userProviders,
    AuthService
  ],
})
export class AuthModule {
}
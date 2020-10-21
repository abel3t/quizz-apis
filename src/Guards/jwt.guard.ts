import { ExecutionContext, Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {
  canActivate(context: ExecutionContext) {
    return super.canActivate(context);
  }

  handleRequest(error: any, authInfo: any, errInfo: any) {
    console.log(error, authInfo, errInfo);
    if (authInfo && !error && !errInfo) {
      return authInfo;
    } else {
      console.log('hehehe');
      throw error;
    }
  }
}

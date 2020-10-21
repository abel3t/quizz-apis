import { Controller, Get } from '@nestjs/common';
import { AppService } from 'app.service';
import { connections } from 'Constants/evironment';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {
  }

  @Get()
  getHello(): string {
    ++connections.value;
    console.log('connected!', connections.value);
    return this.appService.getHello();
  }
}

import { AuthorizationGuard } from './authorization/authorization.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/public')
  getPublic(): string {
    return this.appService.getPublic();
  }

  @UseGuards(AuthorizationGuard)
  @Get('/private')
  getPrivate(): string {
    return this.appService.getPrivate();
  }
}

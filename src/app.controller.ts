import { AuthorizationGuard } from './authorization/authorization.guard';
import { Controller, Get, SetMetadata, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { PermissionsGuard } from './authorization/permissions.guard';

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

  @UseGuards(AuthorizationGuard, PermissionsGuard)
  @SetMetadata('permissions', ['admin:read'])
  @Get('/admin')
  getAdmin(): string {
    return this.appService.getAdmin();
  }
}

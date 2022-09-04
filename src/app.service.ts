import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getPublic(): string {
    return 'Public Route';
  }

  getPrivate(): string {
    return 'Private Route';
  }
}

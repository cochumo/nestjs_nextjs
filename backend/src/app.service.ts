import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!<br />Hi.If you want to try this API, go to /graphql!';
  }
}

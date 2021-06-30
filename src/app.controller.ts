import { Controller, Get, Res, HttpStatus } from '@nestjs/common';
import { AppService } from './app.service';

import { Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello() {
    return { message: this.appService.getHello() };
  }

  @Get('/error')
  throwError(@Res() res: Response) {
    res.status(HttpStatus.NOT_FOUND).json();
  }
}

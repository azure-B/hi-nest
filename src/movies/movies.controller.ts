import { Controller, Get } from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All movies';
  }

  @Get('/:id')
  getOne() {
    return 'This will return One movies';
  }
}

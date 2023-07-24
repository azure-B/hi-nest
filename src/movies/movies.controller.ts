import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
} from '@nestjs/common';

@Controller()
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All movies';
  }

  @Get('/:id')
  getOne(@Param('id') id: string) {
    return `This will return One movies with the id : ${id}`;
  }

  @Post()
  create(@Body() { name, director }) {
    return `${name}, ++ ${director}`;
  }

  @Delete('/:id')
  remove(@Param('id') id: string) {
    return `we will delete movie ${id}`;
  }

  @Patch(':id')
  path(@Param('id') id: string) {
    return `we will update movie id ${id}`;
  }
}

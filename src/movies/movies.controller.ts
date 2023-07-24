import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';

@Controller('movie')
export class MoviesController {
  @Get()
  getAll() {
    return 'This will return All movies';
  }

  @Get('search')
  search(@Query() searchingYear: string) {
    return `we are searching movie made after ${searchingYear.year}`;
  }

  @Post()
  create(@Body() movieData) {
    return `${movieData}`;
  }

  @Get(':id')
  getOne(@Param('id') id: string) {
    return `This will return One movies with the id : ${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `we will delete movie ${id}`;
  }

  @Patch(':id')
  path(@Param('id') id: string, @Body() updateData) {
    return {
      updatedMovie: id,
      ...updateData,
    };
  }
}

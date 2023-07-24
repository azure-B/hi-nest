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
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entities';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie-dto';

@Controller('movie')
export class MoviesController {
  constructor(private moviesServies: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesServies.getAll();
  }

  @Get('search')
  search(@Query('year') searchingYear: string) {
    return `we are searching movie made after ${searchingYear}`;
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesServies.createMovie(movieData);
  }

  @Get(':id')
  getOne(@Param('id') id: number) {
    return this.moviesServies.gerOne(id);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.moviesServies.deleteOne(id);
  }

  @Patch(':id')
  path(@Param('id') id: number, @Body() updateData: UpdateMovieDTO) {
    return this.moviesServies.updateMovie(id, updateData);
  }
}

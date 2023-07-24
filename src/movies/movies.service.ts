import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie } from './entities/movie.entities';
import { CreateMovieDTO } from './dto/create-movie.dto';
import { UpdateMovieDTO } from './dto/update-movie-dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAll(): Movie[] {
    console.log('first');
    return this.movies;
  }

  gerOne(id: number): Movie {
    const movie = this.movies.find((movie) => movie.id === +id);
    if (!movie) {
      throw new NotFoundException(`Movie with ${id} not found`);
    }
    return movie;
  }

  deleteOne(id: number) {
    this.gerOne(id);
    this.movies = this.movies.filter((movie) => movie.id !== +id);
  }

  createMovie(movieData: CreateMovieDTO) {
    this.movies.push({
      id: this.movies.length + 1,
      ...movieData,
    });
  }

  updateMovie(id: number, updateData: UpdateMovieDTO) {
    const movie = this.gerOne(id);
    this.deleteOne(id);
    this.movies.push({ ...movie, ...updateData });
  }
}

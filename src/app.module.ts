import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
@Module({
  imports: [],
  controllers: [MoviesController],
  // Express의 Router같은 존재
  providers: [MoviesService],
})
export class AppModule {}

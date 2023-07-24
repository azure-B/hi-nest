import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
@Module({
  imports: [],
  controllers: [MoviesController],
  // Express의 Router같은 존재
  providers: [],
})
export class AppModule {}

import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { createMovieDto } from './dto/create-movie.dto';
import { Movie } from './entities/movie.entity';
import { MoviesService } from './movies.service';

/**
 * Controller
 *
 * 기본적으로 라우터 역할
 */
@Controller('movies')
export class MoviesController {
  //nest 에서는 express 처럼 서비스들을 하나하나 import로 호출하지 않음
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: createMovieDto) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:id')
  delete(@Param('id') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  /**
   * @Put은 모든 내용을 업데이트 하고
   * @Patch는 일부 내용만 업데이트 함
   */
  @Patch('/:id')
  patch(@Param('id') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}

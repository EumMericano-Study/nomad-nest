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
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
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

  /**
   *  Nest js에서는 @Req, @Res 같은 데코레이터를 통해
   *  express의 기능 그대로 사용할 수 있다.
   *
   *  하지만 Nest는 express와 fastify를 동시에 사용하는 프레임워크로
   *  직접 사용하는것보다 Nest의 기능을 이용해 사용하는 것을 권장한다.
   */
  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('/:id')
  getOne(@Param('id') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDto) {
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
  patch(@Param('id') movieId: number, @Body() updateData: UpdateMovieDto) {
    return this.moviesService.update(movieId, updateData);
  }
}

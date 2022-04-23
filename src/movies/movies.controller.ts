import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';

/**
 * Controller
 *
 * 기본적으로 라우터 역할
 */
@Controller('movies')
export class MoviesController {
  @Get()
  getAll() {
    return 'would be get all movies';
  }

  @Get('search')
  search() {
    return `We are searching for a movie with title: `;
  }

  @Get('/:id')
  getOne(@Param('id') movieId: string) {
    return `this would be return id-${movieId} movie`;
  }

  @Post()
  create(@Body() movieData) {
    return movieData;
  }

  @Delete('/:id')
  delete(@Param('id') movieId: String) {
    return `This will delete a movie ${movieId}`;
  }

  /**
   * @Put은 모든 내용을 업데이트 하고
   * @Patch는 일부 내용만 업데이트 함
   */
  @Patch('/:id')
  patch(@Param('id') movieId: String, @Body() updateData) {
    return {
      updatedMovie: movieId,
      ...updateData,
    };
  }
}

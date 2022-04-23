import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

/*
 *  데코레이터를 통해 클래스에 함수 기능들을 추가할 수 있다.
 *  데코레이터를 쓸 땐 함수나 클래스 사이에 공백을 두면 안된다.
 */
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class AppModule {}

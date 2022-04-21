import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/*
 *  데코레이터를 통해 클래스에 함수 기능들을 추가할 수 있다.
 *  데코레이터를 쓸 땐 함수나 클래스 사이에 공백을 두면 안된다.
 */
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

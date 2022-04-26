import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication, ValidationPipe } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    // 테스팅 환경의 app에도 실제 어플리케이션에서 사용하는 환경설정을 모두 설정해주어야 한다.
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
      }),
    );

    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Welcome to my Movie API');
  });

  describe('/movies', () => {
    it('GET', () => {
      return request(app.getHttpServer()).get('/movies').expect(200).expect([]);
    });
    it('POST 201', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({ title: 'Test Movies', year: 2022, genres: ['test'] })
        .expect(201);
    });

    it('POST 404', () => {
      return request(app.getHttpServer())
        .post('/movies')
        .send({
          title: 'Test Movies',
          year: 2022,
          genres: ['test'],
          otherThings: true,
        })
        .expect(400);
    });

    it('DELETE', () => {
      return request(app.getHttpServer()).delete('/movies').expect(404);
    });

    describe('/movies/:id', () => {
      it('GET', () => {
        return request(app.getHttpServer()).get('/movies/1').expect(200);
      });

      it('should throw 404 Error', () => {
        return request(app.getHttpServer()).get('/movies/9999999').expect(404);
      });

      it('PATCH', () => {
        return request(app.getHttpServer())
          .patch('/movies/1')
          .send({ title: 'hey~' })
          .expect(200);
      });

      it('DELETE', () => {
        return request(app.getHttpServer()).delete('/movies/1').expect(200);
      });
    });
  });
});

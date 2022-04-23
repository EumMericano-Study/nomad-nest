import { PartialType } from '@nestjs/mapped-types';
import { CreateMovieDto } from './create-movie.dto';

/**
 * PartialType을 상속받아 not required를 기본으로 하는
 * UpdateDto 생성
 * PartialType을 사용하기 위해
 * npm i @nestjs/mapped-types 실행
 * mapped-types는 타입을 변환시키고 사용할 수 있도록 도움
 */
export class UpdateMovieDto extends PartialType(CreateMovieDto) {}

import { IsNumber, IsString } from 'class-validator';

export class createMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;
  // each를 통해 배열의 모든 항목 검사
  @IsString({ each: true })
  readonly genres: string[];
}

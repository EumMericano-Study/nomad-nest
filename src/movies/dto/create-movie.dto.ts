import { IsNumber, IsOptional, IsString } from 'class-validator';

export class CreateMovieDto {
  @IsString()
  readonly title: string;
  @IsNumber()
  readonly year: number;

  // each를 통해 배열의 모든 항목 검사
  @IsOptional()
  @IsString({ each: true })
  readonly genres: string[];
}

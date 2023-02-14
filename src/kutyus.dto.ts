import { IsDefined, IsInt, IsString, Max, Min } from 'class-validator';

export default class KutyaDto {
  @IsString()
  @IsDefined()
  nev: string;

  @IsInt()
  @Min(0)
  @Max(10)
  @IsDefined()
  kor: number;
}

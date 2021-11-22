import { IsString, IsInt } from 'class-validator';

export class CreateCatDto {
  // @IsInt()
  // readonly id: bigint;
  @IsString()
  readonly name: string;
  @IsInt()
  readonly age: number;
  @IsString()
  readonly breed: string;
}

import { IsString, IsNotEmpty } from 'class-validator';

export class CreateTaskDto {
  @IsString()    // Valida que sea texto
  @IsNotEmpty()  // Valida que no esté vacío
  title: string | undefined;
}
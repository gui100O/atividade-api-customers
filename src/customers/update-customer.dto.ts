import { IsEmail, IsOptional, IsString, MinLength } from 'class-validator';

export class UpdateCustomerDto {
  @IsOptional()
  @IsString()
  @MinLength(3, { message: 'O nome deve ter pelo menos 3 caracteres.' })
  name?: string;

  @IsOptional()
  @IsEmail({}, { message: 'Email inválido.' })
  email?: string;
}

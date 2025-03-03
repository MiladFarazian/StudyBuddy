import { IsString, IsEmail, IsOptional, IsBoolean, IsEnum, IsArray, IsInt, Min } from 'class-validator';
import { Year, Gender, Rewarding } from '@prisma/client';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  major: string;

  @IsEnum(Year)
  year: Year;

  @IsOptional()
  @IsString()
  transcriptUrl?: string;

  @IsEnum(Gender)
  gender: Gender;

  @IsEmail()
  email: string;

  @IsString()
  phone: string;

  @IsBoolean()
  taExperience: boolean;

  @IsBoolean()
  tutorExperience: boolean;

  @IsOptional()
  @IsString()
  experienceDetails?: string;

  @IsArray()
  @IsString({ each: true })
  classes: string[];

  @IsOptional()
  @IsString()
  desiredCareer?: string;

  @IsOptional()
  @IsString()
  motivation?: string;

  @IsEnum(Rewarding)
  rewardingExperience: Rewarding;

  @IsBoolean()
  nearCampus: boolean;

  @IsBoolean()
  meetInPerson: boolean;

  @IsInt()  // ✅ Ensure it's an integer
  @Min(0)   // ✅ Prevent negative numbers
  availableHoursPerWeek: number;
}

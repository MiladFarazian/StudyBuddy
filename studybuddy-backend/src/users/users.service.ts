import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User } from '@prisma/client';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        name: data.name,
        major: data.major,
        year: data.year,
        transcriptUrl: data.transcriptUrl,
        gender: data.gender,
        email: data.email,
        phone: data.phone,
        experience: {
          create: {
            taExperience: data.taExperience,
            tutorExperience: data.tutorExperience,
            experienceDetails: data.experienceDetails,
          },
        },
        preferences: {
          create: {
            classes: JSON.stringify(data.classes), // ✅ Convert array to JSON string
            desiredCareer: data.desiredCareer,
            motivation: data.motivation,
            rewardingExperience: data.rewardingExperience,
            nearCampus: data.nearCampus ?? false, // ✅ Use provided value or default to false
            meetInPerson: data.meetInPerson ?? false, // ✅ Use provided value or default to false
            availableHoursPerWeek: Number(data.availableHoursPerWeek) // ✅ Use provided value or default to 0
          },
        },
      },
      include: {
        experience: true,
        preferences: true,
      },
    });
  }

  async getUsers(): Promise<User[]> {
    return this.prisma.user.findMany({
      include: { experience: true, preferences: true },
    });
  }

  async getUserById(id: string) {
    return this.prisma.user.findUnique({
      where: { id },
      include: { experience: true, preferences: true },
    });
  }
  
  async deleteUser(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
  
    if (!user) {
      throw new NotFoundException(`User with ID ${id} not found`);
    }
  
    // ✅ Delete related records first (to avoid foreign key constraint errors)
    await this.prisma.experience.deleteMany({ where: { userId: id } });
    await this.prisma.preferences.deleteMany({ where: { userId: id } });
  
    // ✅ Now, delete the user
    return this.prisma.user.delete({ where: { id } });
  }  
}

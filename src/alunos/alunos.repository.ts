import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service.js';

@Injectable()
export class AlunosRepository {
  constructor(private readonly prisma: PrismaService) {}

  findAll() {
    return this.prisma.aluno.findMany({
      orderBy: { id: 'asc' },
    });
  }

  findById(id: number) {
    return this.prisma.aluno.findUnique({
      where: { id },
    });
  }

  create(nome: string, email: string, curso: string) {
    return this.prisma.aluno.create({
      data: { nome, email, curso },
    });
  }

  update(id: number, nome: string, email: string, curso: string) {
    return this.prisma.aluno.update({
      where: { id },
      data: { nome, email, curso },
    });
  }

  delete(id: number) {
    return this.prisma.aluno.delete({
      where: { id },
    });
  }
}
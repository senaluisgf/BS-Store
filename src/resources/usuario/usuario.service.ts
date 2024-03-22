import { PrismaClient } from "@prisma/client";
import * as bcryptjs from 'bcryptjs';
import { CreateUsuarioDto, UpdateUsuarioDto } from "./usuario.types";

const ROUNDS = Number(process.env.ROUNDS) ?? 2;
const prisma = new PrismaClient();

export async function listUsers() {
  return prisma.usuario.findMany();
}

export async function createUser(dto: CreateUsuarioDto) {
  const salt = await bcryptjs.genSalt(ROUNDS);
  const hash = await bcryptjs.hash(dto.senha, salt)

  return prisma.usuario.create({
    data: {
      email: dto.email,
      nome: dto.nome,
      senha: hash,
      tipoUsuarioId: dto.tipoUsuarioId
    }
  });
}

export async function getUser(id: string) {
  return prisma.usuario.findFirstOrThrow({
    where: { id }
  });
}

export async function deleteUser(id: string) {
  return prisma.usuario.delete({
    where: { id }
  });
}

export async function updateUser(id: string, dto: UpdateUsuarioDto) {
  return prisma.usuario.update({
    where: { id },
    data: {
      nome: dto.nome,
      email: dto.email,
      tipoUsuarioId: dto.tipoUsuarioId,
    }
  });
}
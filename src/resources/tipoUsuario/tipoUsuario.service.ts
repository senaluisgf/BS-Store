import { PrismaClient, TipoUsuario } from "@prisma/client";

const prisma = new PrismaClient();

export async function getTiposUsuarios(): Promise<TipoUsuario[]> {
  return await prisma.tipoUsuario.findMany();
}

export async function createTipoUsuario(rotulo: string): Promise<TipoUsuario> {
  return await prisma.tipoUsuario.create({
    data: { rotulo }
  });
}

export async function getTipoUsuario(id: string): Promise<TipoUsuario> {
  return await prisma.tipoUsuario.findFirstOrThrow({
    where: { id }
  });
}

export async function deleteTipoUsuario(id: string): Promise<TipoUsuario> {
  return await prisma.tipoUsuario.delete({
    where: { id }
  });
}
import { PrismaClient, Produto } from '@prisma/client';
import { CreateProdutoDto, UpdateProdutoDto } from './produto.types';

const prisma = new PrismaClient();

export async function getAllProdutos(): Promise<Produto[]> {
  return await prisma.produto.findMany();
}

export async function jaExiste(nome: string): Promise<null | Produto> {
  return await prisma.produto.findFirst({
    where: { nome },
  });
}

export async function getProduto(id: string): Promise<Produto> {
  return await prisma.produto.findFirstOrThrow({
    where: { id },
  });
}

export async function deleteProduto(id: string): Promise<Produto> {
  return await prisma.produto.delete({
    where: { id },
  });
}

export async function createProduto(
  produto: CreateProdutoDto
): Promise<Produto> {
  return await prisma.produto.create({ data: produto });
}

export async function updateProduto(
  id: string,
  produto: UpdateProdutoDto
): Promise<Produto> {
  return await prisma.produto.update({ where: { id }, data: produto });
}
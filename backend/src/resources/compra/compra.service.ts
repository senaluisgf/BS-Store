import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function buyProdutos(produtosId: string[]) {
  return await prisma.produto.findMany({
    where: { id: { in: produtosId } }
  });
}

export default { buyProdutos };
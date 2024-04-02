import { PrismaClient } from "@prisma/client";
import { TiposUsuarios } from "../src/resources/tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();


async function main() {
  await prisma.tipoUsuario.createMany({
    data: [
      { id: TiposUsuarios.ADMIN, rotulo: "admin" },
      { id: TiposUsuarios.CLIENT, rotulo: "client" },
    ],
    skipDuplicates: true,
  });

  await prisma.usuario.create({
    data: {
      nome: "Administrador",
      email: "admin@email.com",
      senha: "$2a$10$Pok71OtmsZ9q4.Tqet7cbu3GUmmibM4u3GY1OmvVJ/s373C9Z8sb6",
      tipoUsuarioId: TiposUsuarios.ADMIN,
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
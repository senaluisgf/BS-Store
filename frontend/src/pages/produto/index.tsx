import { getlProdutos } from "@/fakeDb/produto";
import Link from "next/link";


export default function Produtos() {
  const produtos = getlProdutos();
  return (
  <>
    <h1>Produtos</h1>
    <ul>
      {produtos.map(p => (
        <li key={p.id}>
        <Link href={`produto/${p.id}`}>{p.nome}</Link>
        </li>
      ))}
    </ul>
  </>
  );
}

import { ProdutoResponseDTO } from "../Types/Produto";
import { apiFetch } from "./apiConfig";

export function getProdutos(): Promise<ProdutoResponseDTO[]> {
  return apiFetch<ProdutoResponseDTO[]>("/produto");
}

export function getProdutoById(id: number): Promise<ProdutoResponseDTO> {
  return apiFetch<ProdutoResponseDTO>(`/produto/${id}`);
}

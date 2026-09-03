import { apiFetch } from "./apiConfig";

export type CarrinhoItemDTO = {
  id: number;
  estoqueId: number;
  produtoId: number;
  nomeProduto: string;
  fotoUrl: string | null;
  tamanho: string;
  quantidade: number;
  precoUnitario: number;
  subtotal: number;
};

export type CarrinhoResponseDTO = {
  id: number;
  usuarioId: number;
  previsaoValorTotal: number;
  atualizadoEm: string;
  itens: CarrinhoItemDTO[];
};

export function getCarrinho(usuarioId: number): Promise<CarrinhoResponseDTO> {
  return apiFetch<CarrinhoResponseDTO>(`/carrinho/${usuarioId}`);
}

export function adicionarItem(
  usuarioId: number,
  estoqueId: number,
  quantidade: number,
): Promise<CarrinhoResponseDTO> {
  return apiFetch<CarrinhoResponseDTO>(`/carrinho/${usuarioId}/itens`, {
    method: "POST",
    body: { estoqueId, quantidade },
  });
}

export function atualizarItem(
  usuarioId: number,
  itemId: number,
  quantidade: number,
): Promise<CarrinhoResponseDTO> {
  return apiFetch<CarrinhoResponseDTO>(
    `/carrinho/${usuarioId}/itens/${itemId}`,
    { method: "PUT", body: { quantidade } },
  );
}

export function removerItem(
  usuarioId: number,
  itemId: number,
): Promise<CarrinhoResponseDTO> {
  return apiFetch<CarrinhoResponseDTO>(
    `/carrinho/${usuarioId}/itens/${itemId}`,
    { method: "DELETE" },
  );
}

export function limparCarrinho(usuarioId: number): Promise<CarrinhoResponseDTO> {
  return apiFetch<CarrinhoResponseDTO>(`/carrinho/${usuarioId}/itens`, {
    method: "DELETE",
  });
}
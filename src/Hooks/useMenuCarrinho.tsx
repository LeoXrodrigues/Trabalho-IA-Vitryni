import { useEffect, useState } from "react";
import {
  atualizarItem,
  getCarrinho,
  removerItem,
  type CarrinhoResponseDTO,
} from "../Api/MenuCarrinho";
import { ApiError } from "../Api/apiConfig";

// Sem autenticação ainda — usuarioId fixo. Trocar quando o login (JWT) entrar.
const USUARIO_ID = 3;

export function fmt(value: number): string {
  return value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
  });
}

export function useMenuCarrinho() {
  const [carrinho, setCarrinho] = useState<CarrinhoResponseDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getCarrinho(USUARIO_ID)
      .then(setCarrinho)
      .catch((e) => {
        // 404 = usuário ainda não tem carrinho → tratar como vazio, sem erro
        if (e instanceof ApiError && e.status === 404) {
          setCarrinho(null);
        } else {
          setError(
            e instanceof ApiError ? e.message : "Erro ao carregar o carrinho",
          );
        }
      })
      .finally(() => setLoading(false));
  }, []);

  async function updateQty(itemId: number, delta: number) {
    const item = carrinho?.itens.find((i) => i.id === itemId);
    if (!item) return;
    const novaQtd = item.quantidade + delta;
    if (novaQtd < 1) return; // pra zerar, usar removeItem (a API não aceita quantidade: 0)
    try {
      setCarrinho(await atualizarItem(USUARIO_ID, itemId, novaQtd));
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Erro ao atualizar item");
    }
  }

  async function removeItem(itemId: number) {
    try {
      setCarrinho(await removerItem(USUARIO_ID, itemId));
    } catch (e) {
      setError(e instanceof ApiError ? e.message : "Erro ao remover item");
    }
  }

  const itens = carrinho?.itens ?? [];
  const total = carrinho?.previsaoValorTotal ?? 0;

  return { itens, total, loading, error, updateQty, removeItem };
}
import { useCallback, useEffect, useState } from "react";
import { getProdutoById, getProdutos } from "../Api/Produto";
import { ProdutoResponseDTO } from "../Types/Produto";

interface UseProdutosResult {
  produtos: ProdutoResponseDTO[];
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

interface UseProdutoByIdResult {
  produto: ProdutoResponseDTO | null;
  loading: boolean;
  error: string | null;
  refetch: () => void;
}

export function useProdutos(): UseProdutosResult {
  const [produtos, setProdutos] = useState<ProdutoResponseDTO[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProdutos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProdutos();
      setProdutos(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao carregar produtos",
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProdutos();
  }, [fetchProdutos]);

  return { produtos, loading, error, refetch: fetchProdutos };
}

export function useProdutoById(id: number): UseProdutoByIdResult {
  const [produto, setProduto] = useState<ProdutoResponseDTO | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProduto = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProdutoById(id);
      setProduto(data);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Erro ao carregar produto",
      );
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchProduto();
  }, [fetchProduto]);

  return { produto, loading, error, refetch: fetchProduto };
}

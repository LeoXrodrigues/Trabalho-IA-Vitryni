import { useCallback, useState } from "react";
import { cadastrarEntregador } from "../Api/Entregador";
import { ApiError } from "../Api/apiConfig";
import { EntregadorCadastroDTO, EntregadorResponseDTO } from "../Types/Entregador";

type Status = "idle" | "loading" | "success" | "error";

interface UseCadastroEntregadorResult {
  status: Status;
  error: string | null;
  resultado: EntregadorResponseDTO | null;
  enviar: (payload: EntregadorCadastroDTO) => Promise<void>;
  reset: () => void;
}

export function useCadastroEntregador(): UseCadastroEntregadorResult {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [resultado, setResultado] = useState<EntregadorResponseDTO | null>(null);

  const enviar = useCallback(async (payload: EntregadorCadastroDTO) => {
    setStatus("loading");
    setError(null);
    try {
      const data = await cadastrarEntregador(payload);
      setResultado(data);
      setStatus("success");
    } catch (err) {
      setError(
        err instanceof ApiError
          ? err.message
          : "Não foi possível enviar o cadastro. Tente novamente.",
      );
      setStatus("error");
    }
  }, []);

  const reset = useCallback(() => {
    setStatus("idle");
    setError(null);
    setResultado(null);
  }, []);

  return { status, error, resultado, enviar, reset };
}

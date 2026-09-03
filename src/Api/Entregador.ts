import { EntregadorCadastroDTO, EntregadorResponseDTO } from "../Types/Entregador";
import { apenasDigitos } from "../Utils/validadores";
import { ApiError } from "./apiConfig";

// Ainda não existe endpoint de cadastro de entregador no backend — mock local
// simulando latência e os desfechos (sucesso / CPF duplicado) até a rota existir.
const MOCK_DELAY_MS = 1200;

export function cadastrarEntregador(
  payload: EntregadorCadastroDTO,
): Promise<EntregadorResponseDTO> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const cpfDigitos = apenasDigitos(payload.cpf);
      if (cpfDigitos === "00000000000") {
        reject(new ApiError(409, "Já existe um cadastro com este CPF."));
        return;
      }

      resolve({
        id: `ent_${Date.now()}`,
        nome: payload.nome,
        status: "pendente",
      });
    }, MOCK_DELAY_MS);
  });
}

export type TipoVeiculo = "moto" | "carro" | "bicicleta";

export interface EntregadorCadastroDTO {
  nome: string;
  cpf: string;
  telefone: string;
  tipoVeiculo: TipoVeiculo;
  placa: string;
  cnh: string;
}

export interface EntregadorResponseDTO {
  id: string;
  nome: string;
  status: "pendente" | "aprovado";
}

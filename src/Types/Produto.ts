export interface TamanhoDisponivelDTO {
  tamanho: string;
  quantidade: number;
  disponivel: boolean;
}

export interface ProdutoResponseDTO {
  id: number;
  nome: string;
  descricao: string;
  preco: number;
  precoPromocional: number | null;
  precoFinal: number;
  tipo: string;
  cor: string;
  avaliacao: number;
  status: string;
  fotosUrls: string[];
  tamanhosDisponiveis: TamanhoDisponivelDTO[];
}

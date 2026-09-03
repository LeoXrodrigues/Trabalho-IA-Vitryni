export type RootStackParamList = {
  MenuCarrinho: undefined;
  Endereco: undefined;
  Pagamento: undefined;
  PaguePix: { orderId: string };
  PedidoConfirmado: { orderId: string };
  Produto: { id: number } | undefined;
};
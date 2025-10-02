import { Cliente } from './cliente';

export interface Mensagens {
  id: number,
  mensagem: string,
  createdAt: string,
  updatedAt: string,
  clienteId: number,
  Cliente: Cliente
}

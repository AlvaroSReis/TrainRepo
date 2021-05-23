import { Admin } from '../interfaces/Entities'

export type RoutesStack = {
  Login: undefined;
  Register: undefined;
  Home: Admin;
}

export type RoutesTab = {
  Admin: Admin;
  Dashboard: Admin;
  Endereço: Admin;
  Feira: Admin;
  Item: Admin;
  Mercado: Admin;
  Produto: Admin;
  Produtor: Admin;
  Propriedade: Admin;
  Reserva: Admin;
  Usuário: Admin;
}

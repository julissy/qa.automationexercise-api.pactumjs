/**
 * Parâmetros de query para listagem de usuários (GET /usuarios)
 */
export interface IGetUsersQuery {
  _id: string
  nome: string
  email: string
  password: string
  administrador: string
}

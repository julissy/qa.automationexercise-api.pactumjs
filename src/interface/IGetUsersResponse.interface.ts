/**
 * Item retornado na lista de usuários (GET /usuarios) - detalhe do usuário
 */
export interface IGetUserResponse {
  nome: string
  email: string
  password: string
  administrador: string
  _id: string
}

/**
 * Corpo da resposta de listagem de usuários
 */
export interface IGetUsersResponse {
  quantidade: number
  usuarios: Array<IGetUserResponse>
}

/**
 * Corpo da resposta de criação de usuário
 */
export interface ICreateUserResponse {
  message: string
  _id: string
}

/**
 * Corpo da resposta de exclusão de usuário
 */
export interface IDeleteUserResponse {
  message: string
}

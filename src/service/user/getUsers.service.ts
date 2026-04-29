import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IGetUsersQuery } from "../../interface/IUser/IGetUsersQuery.interface"
import { IParamsDefault } from "../../interface/IUser/IParamsDefault.interface"

/**
 * Lista usuários na Serverest, com filtros opcionais via query string
 * @param params - Configuração padrão de validação
 * @param query - Filtros (_id, nome, email, password, administrador)
 * @returns Response da requisição
 */
export default async function getUsers(
  params: IParamsDefault
) {
  return await specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios`)
    .withHeaders(defaultHeaders)
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode
    })
}
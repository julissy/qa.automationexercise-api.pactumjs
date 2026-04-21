import "dotenv/config"
import { specPactumJs } from "../../utils/spec"
import { defaultHeaders } from "../../utils/headers"
import { IGetUsersQuery } from "../../interface/IGetUsersQuery.interface"
import { IParamsDefault } from "../../interface/IParamsDefault.interface"

/**
 * Lista usuários na Serverest, com filtros opcionais via query string
 * @param params - Configuração padrão de validação
 * @param query - Opcional — filtros (_id, nome, email, password, administrador). Omitir para listar sem query string
 * @returns Response da requisição
 */
export default async function getUsers(
  params: IParamsDefault,
  query?: IGetUsersQuery,
) {
  let spec = specPactumJs()
    .get(`${process.env.BASE_URL}/usuarios`)
    .withHeaders(defaultHeaders)

  if (query !== undefined) {
    spec = spec.withQueryParams(query)
  }

  return await spec
    .expectStatus(params.statusCode)
    .retry({
      count: params.retry.count,
      delay: params.retry.delay,
      strategy: ({ res }) => res.statusCode === params.statusCode
    })
}
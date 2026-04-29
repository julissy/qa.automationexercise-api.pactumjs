# CENÁRIO DE TESTE: USER - DELETE /usuarios/{id}

> Casos de teste manuais elaborados como base de validação funcional antes da automação.

## CASO DE TESTE 05 (CT05): Excluir usuário existente
**Descrição** Garantir que a exclusão de usuário por _id funciona corretamente.
**Criticidade** Crítico (Funcionalidade essencial de gestão de dados/LGPD).

**cURL de Referência:**
Bashcurl --location --globoff --request DELETE '{{baseUrl}}/usuarios/0ux9S8i9t7Mi6S0W' \
--header 'Accept: application/json'
**Pré-requisitos:**
 O _id informado deve pertencer a um usuário cadastrado e sem carrinhos ativos.
**Passos:**
1.Obter um _id válido via GET /usuarios.
2.Configurar a requisição DELETE com o ID obtido.
3.Enviar a requisição.
**Resposta Esperada:** 
* Status Code: 200 OK
JSON: { "message": "Registro excluído com sucesso" }

## CASO DE TESTE 06 (CT06): Excluir usuário inexistente
**Descrição:** Validar o comportamento do sistema ao tentar excluir um ID que não consta na base.
**Criticidade:** Média (Funcionalidade secundária; não impede o uso do sistema).
**cURL de Referência:**
Bashcurl --location --globoff --request DELETE '{{baseUrl}}/usuarios/ID_NAO_EXISTENTE' \
--header 'Accept: application/json'
**Pré-requisitos:** Nenhum.
**Passos:**
1.Definir um ID aleatório (que não exista no banco) no parâmetro :_id.
2,Executar a chamada DELETE.
**Resposta Esperada:** 
* Status Code: 200 OK 
JSON: { "message": "Nenhum registro excluído" }

## CASO DE TESTE 07 (CT07): Excluir usuário com carrinho cadastrado
**Descrição:**
Impedir a exclusão de usuários que possuam dependências vinculadas.
**Criticidade:** Alta (Impacta a integridade referencial dos dados do sistema).
**cURL de Referência:**
Bashcurl --location --globoff --request DELETE '{{baseUrl}}/usuarios/ID_COM_CARRINHO' \
--header 'Accept: application/json'
**Pré-requisitos:**O usuário associado ao _id deve possuir um carrinho ativo.
**Passos:**
1.Identificar um usuário que já possua um carrinho criado.
2.Tentar realizar a exclusão desse usuário via DELETE.
**Resposta Esperada:** 
* Status Code: 400 Bad Request
JSON: { "message": "Este usuário possui carrinho cadastrado" }

## Tabela de CTs ordenada por criticidade

| CT   | Nome do CT                             | Criticidade |
|------|----------------------------------------|-------------|
| CT01 | Criar usuário com perfil administrador | Crítico     |
| CT05 | Excluir usuário existente              | Crítico     |
| CT07 | Excluir usuário com carrinho cadastrado| Alta        |
| CT02 | Criar usuário com perfil comum         | Alta        |
| CT03 | Consultar usuário por ID               | Alta        |
| CT04 | Listar usuários cadastrados            | Média       |
| CT06 | Excluir usuário inexistente            | Média       |
import { reporter } from "pactum"
import 'mocha'

export { assert as assertTs } from "chai"

export const describeName = 'Serverest API Tests'

export const simpleReport = {
  async afterTest(testCase: Mocha.Test) {
    console.log(`✔️ Teste finalizado: ${testCase.title}`)
  }
}

export const reportPactumJs = reporter

import { config } from 'dotenv'
import { z } from 'zod'
/**
 * Criamos para validas os dados do env
 * vamos usar o zod
 * -npm i zod
 *
 * schema seria um formato de dado
 * passamos qual o formato de dados
 *
 * Lembrando que o processer.env é um objeto
 * entao no zod passamos o objeto e passamos
 * que é um string
 *
 * Criamos a validadacao
 * usando o parse(process.env) vamos acessar ele
 * e o zod verifica o dado passado e valida
 *
 * NODE_ENV: development, test, production
 *
 * passando no schema
 * usamos o enum([ira rebecer, os dados, kkk])
 */

if (process.env.NODE_ENV === 'test') {
  config({ path: '.env.test' })
} else {
  config()
}

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('production'),
  DATABASE_URL: z.string(),
  PORT: z.number().default(3333),
})

const _env = envSchema.safeParse(process.env)

if (_env.success === false) {
  console.error('Invalid environment variables!', _env.error.format())

  throw new Error('Invalid environment variables')
}

export const env = _env.data

/**
 * Passamos agora o import config env
 *
 * Pois passando um if
 * fazemos isso pois é muito ruim que o teste crie algo no banco
 * Criamos um banco para o teste
 *
 * dizemos que caso o process.env.NODE_ENV === test
 * rodar a config de env de test
 * porem se nao rodar a config normal que seria o env
 */

import { GraphQLClient } from 'graphql-request'
import { GET_REPOSITORY } from './graphql/github'
import {
  GetRespositoryQuery,
  GetRespositoryQueryVariables,
} from './types/graphql'
import { config } from 'dotenv'

config()

const ENDPOINT = 'https://api.github.com/graphql'

async function main() {
  try {
    const requestHeaders = {
      authorization: `Bearer ${process.env.GITHUB_API_TOKEN}`,
    }
    const client = new GraphQLClient(ENDPOINT)

    const data = await client.request<
      GetRespositoryQuery,
      GetRespositoryQueryVariables
    >(
      GET_REPOSITORY,
      {
        owner: 'achan-godaddy',
        name: 'p-map',
      },
      requestHeaders
    )

    console.log(`read repository:` + data.repository.name)
  } catch (e) {
    console.error(`Error making request ${e}`)
  }
}

main()

import { gql } from 'graphql-request'

export const GET_REPOSITORY = gql`
  query getRespository($owner: String!, $name: String!) {
    repository(owner: $owner, name: $name) {
      name
      nameWithOwner
    }
  }
`

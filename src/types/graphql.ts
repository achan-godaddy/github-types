import * as Types from './graphql-types';

export type GetRespositoryQueryVariables = Types.Exact<{
  owner: Types.Scalars['String'];
  name: Types.Scalars['String'];
}>;


export type GetRespositoryQuery = (
  { __typename?: 'Query' }
  & { repository?: Types.Maybe<(
    { __typename?: 'Repository' }
    & Pick<Types.Repository, 'name' | 'nameWithOwner'>
  )> }
);

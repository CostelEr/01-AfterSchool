import * as Types from "../../../../graphql/types.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type GetContinetsQueryVariables = Types.Exact<{ [key: string]: never }>;

export type GetContinetsQuery = { __typename?: "Query" } & {
  continents: Array<
    { __typename?: "Continent" } & Pick<Types.Continent, "code" | "name">
  >;
};

export const GetContinetsDocument = gql`
  query GetContinets {
    continents {
      code
      name
    }
  }
`;

/**
 * __useGetContinetsQuery__
 *
 * To run a query within a React component, call `useGetContinetsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetContinetsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetContinetsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetContinetsQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetContinetsQuery,
    GetContinetsQueryVariables
  >
) {
  return Apollo.useQuery<GetContinetsQuery, GetContinetsQueryVariables>(
    GetContinetsDocument,
    baseOptions
  );
}
export function useGetContinetsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetContinetsQuery,
    GetContinetsQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetContinetsQuery, GetContinetsQueryVariables>(
    GetContinetsDocument,
    baseOptions
  );
}
export type GetContinetsQueryHookResult = ReturnType<
  typeof useGetContinetsQuery
>;
export type GetContinetsLazyQueryHookResult = ReturnType<
  typeof useGetContinetsLazyQuery
>;
export type GetContinetsQueryResult = Apollo.QueryResult<
  GetContinetsQuery,
  GetContinetsQueryVariables
>;

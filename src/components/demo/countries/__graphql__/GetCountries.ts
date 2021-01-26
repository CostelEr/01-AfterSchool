import * as Types from "../../../../graphql/types.d";

import { gql } from "@apollo/client";
import * as Apollo from "@apollo/client";
export type GetCountriesQueryVariables = Types.Exact<{
  search: Types.Scalars["String"];
}>;

export type GetCountriesQuery = { __typename?: "Query" } & {
  countries: Array<
    { __typename?: "Country" } & Pick<
      Types.Country,
      "code" | "name" | "capital"
    >
  >;
};

export const GetCountriesDocument = gql`
  query GetCountries($search: String!) {
    countries(filter: { code: { regex: $search } }) {
      code
      name
      capital
    }
  }
`;

/**
 * __useGetCountriesQuery__
 *
 * To run a query within a React component, call `useGetCountriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCountriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCountriesQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useGetCountriesQuery(
  baseOptions?: Apollo.QueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >
) {
  return Apollo.useQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    baseOptions
  );
}
export function useGetCountriesLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<
    GetCountriesQuery,
    GetCountriesQueryVariables
  >
) {
  return Apollo.useLazyQuery<GetCountriesQuery, GetCountriesQueryVariables>(
    GetCountriesDocument,
    baseOptions
  );
}
export type GetCountriesQueryHookResult = ReturnType<
  typeof useGetCountriesQuery
>;
export type GetCountriesLazyQueryHookResult = ReturnType<
  typeof useGetCountriesLazyQuery
>;
export type GetCountriesQueryResult = Apollo.QueryResult<
  GetCountriesQuery,
  GetCountriesQueryVariables
>;

import request from 'graphql-request';

const GRAPHQL_URL = 'http://localhost:9000/graphql/'

export const useFetchData = <TData, TVariables>(
  query: string,
  options?: RequestInit['headers']
): ((variables?: TVariables) => Promise<TData>) => {
  return async (variables?: TVariables) => request(GRAPHQL_URL, query, variables)
}
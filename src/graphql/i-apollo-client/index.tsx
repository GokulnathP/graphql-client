import {
  ApolloClient,
  ApolloProvider,
  gql,
  InMemoryCache,
  useQuery
} from '@apollo/client';
import React from 'react';
import { IACBook } from './types';

/*
* Library - "@apollo/client"
* Have hooks, client side parsing graphql query, cache and so on
* Heavy library
* No types output
* */

const GRAPHQL_URL = 'http://localhost:9000/graphql/'

const client = new ApolloClient({
  uri: GRAPHQL_URL,
  cache: new InMemoryCache()
})

export const ACBooksProvider = ({ children }: { children: React.ReactNode }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>
}

const GET_BOOKS_QUERY = gql`
    query GetBooks {
        books {
            id
            title
            author
            imageLink
        }
    }
`

export const useGetBooksQuery = () => {
  const { loading: isLoading, error: isError, data } = useQuery(GET_BOOKS_QUERY);

  const books: IACBook[] = data?.books

  return { isLoading, isError, data: { books } }
}

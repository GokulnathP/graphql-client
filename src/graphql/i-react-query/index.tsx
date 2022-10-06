import {
  gql,
  request
} from 'graphql-request';
import React from 'react';
import {
  QueryClient,
  QueryClientProvider,
  useQuery
} from '@tanstack/react-query';
import { IRQBook } from './types';

/*
* Libraries - "react-query, graphql-request"
* Have hooks, cache and so on
* No types output
* */

const GRAPHQL_URL = 'http://localhost:9000/graphql/'

const client = new QueryClient()

export const RQBooksProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>
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

export const getBooks = async () => {
  return await request(GRAPHQL_URL, GET_BOOKS_QUERY)
}

export const useGetBooksQuery = () => {
  const { isLoading, isError, data } = useQuery(['Books'], getBooks)

  const books: IRQBook[] = data?.books

  return { isLoading, isError, data: { books } }
}

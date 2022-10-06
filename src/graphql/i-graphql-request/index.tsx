import {
  gql,
  request
} from 'graphql-request';
import {
  useEffect,
  useState
} from 'react';
import { IBook } from '../../Books/types';
import { IGRBook } from './types';

/*
* Library - "graphql-request"
* Light weight
* Avoid some boilerplate code for graphql request
* Everything need to be handled manually (e.g) Types, hooks, cache and so on
* */

const GRAPHQL_URL = 'http://localhost:9000/graphql/'

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

export const getBooks = async (): Promise<IGRBook[]> => {
  const { books } = await request(GRAPHQL_URL, GET_BOOKS_QUERY)
  return books;
}

export const useGetBooksQuery = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isError, setIsError] = useState<boolean>(false)
  const [data, setData] = useState<null | { books: IBook[] }>(null)

  useEffect(() => {
    setIsLoading(true);

    getBooks()
      .then(books => setData({ books }))
      .catch(_ => setIsError(true))
      .finally(() => setIsLoading(false))

  }, [])

  return { isLoading, isError, data }
}

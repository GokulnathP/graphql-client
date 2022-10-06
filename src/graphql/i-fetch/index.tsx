import {
  useEffect,
  useState
} from 'react';
import { IBook } from '../../Books/types';
import { IFetchBook } from './types';

/*
* No third party libraries
* Everything need to be handled manually (e.g) Types, hooks, cache and so on
* */

const GRAPHQL_URL = 'http://localhost:9000/graphql/'

const GET_BOOKS_QUERY = `
  query GetBooks {
    books {
      id
      title
      author
      imageLink
    }
  }
`

export const getBooks = async (): Promise<IFetchBook[]> => {
  const response = await fetch(GRAPHQL_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ query: GET_BOOKS_QUERY })
  })

  const { data: { books } } = await response.json()
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

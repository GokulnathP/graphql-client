import { useQuery, UseQueryOptions } from '@tanstack/react-query';
import { useFetchData } from '../fetcher';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Book = {
  __typename?: 'Book';
  author?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  imageLink?: Maybe<Scalars['String']>;
  language?: Maybe<Scalars['String']>;
  link?: Maybe<Scalars['String']>;
  pages?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  year?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  books: Array<Book>;
  greeting?: Maybe<Scalars['String']>;
};

export type GetBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetBooksQuery = { __typename?: 'Query', books: Array<{ __typename?: 'Book', id: string, title?: string | null, author?: string | null, imageLink?: string | null }> };


export const GetBooksDocument = `
    query GetBooks {
  books {
    id
    title
    author
    imageLink
  }
}
    `;
export const useGetBooksQuery = <
      TData = GetBooksQuery,
      TError = unknown
    >(
      variables?: GetBooksQueryVariables,
      options?: UseQueryOptions<GetBooksQuery, TError, TData>
    ) =>
    useQuery<GetBooksQuery, TError, TData>(
      variables === undefined ? ['GetBooks'] : ['GetBooks', variables],
      useFetchData<GetBooksQuery, GetBooksQueryVariables>(GetBooksDocument).bind(null, variables),
      options
    );
import { useGetBooksQuery } from '../graphql/i-graphql-codegen/generated/graphql';
import Book from './Book';
import classes from './books.module.css';

const Books = () => {
  const { isLoading, isError, data } = useGetBooksQuery();

  if (isLoading) {
    return (
      <div>Loading....</div>
    )
  }

  if (isError || !data) {
    return (
      <div>Error occurred! Please retry later!!</div>
    )
  }

  return (
    <div className={classes.Books}>
      {data.books.map(book => <Book key={book.id} book={book}/>)}
    </div>
  )
}

export default Books
import { IBook } from '../types';
import classes from './book.module.css'

const Book = ({ book }: { book: IBook }) => {
  return (
    <div className={classes.Book}>
      <div className={classes.Cover}>
        {book.imageLink && <img src={book.imageLink} alt={book.title ?? ''}/>}
      </div>
      <div className={classes.Content}>
        <p className={classes.Title}>{book.title}</p>
        <p className={classes.Author}>{book.author}</p>
      </div>
    </div>
  );
}

export default Book
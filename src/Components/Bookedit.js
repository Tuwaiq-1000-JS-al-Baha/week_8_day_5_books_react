import { useContext } from "react";
import BookContext from "../utlis/BookContext";

function Bookedit(props) {
    const{book}=props
    const {confirmBook}=useContext(BookContext)
    return ( <>
    
  <form onSubmit={e => confirmBook(e, book._id)}>
     <label>title</label>
        <br />
        <input type="text" name="title"  defaultValue={book.title} required />
        <br />
        <label>description</label>
        <br />
        <input type="text" name="description"  defaultValue={book.description} required />
        <br />
        <label>author</label>
        <br />
        <input type="text" name="author"  defaultValue={book.author} required />
        <br />
        <label>image</label>
        <br />
        <input type="url" name="image"  defaultValue={book.image} required />
        <br />
        <button type="submit" >confirm</button>
</form>  
    
    
    </> );
}

export default Bookedit;
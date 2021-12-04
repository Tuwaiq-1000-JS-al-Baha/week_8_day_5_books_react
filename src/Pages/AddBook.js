import { useContext } from "react";
import BookContext from "../utlis/BookContext";

function AddBook() {
    const {addbook}=useContext(BookContext)
    return ( <>
    <form onSubmit={addbook}>
        <label>title</label>
        <br />
        <input type="text" name="title" required />
        <br />
        <label>description</label>
        <br />
        <input type="text" name="description" required />
        <br />
        <label>author</label>
        <br />
        <input type="text" name="author" required />
        <br />
        <label>image</label>
        <br />
        <input type="url" name="image" required />
        <br />
        <button type="submit">Add</button>
    </form>
    
    
    </> );
}

export default AddBook;
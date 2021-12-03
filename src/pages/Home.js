import BookGroup from "../components/BookGroup"

function Home(props) {
  const { books, editBook, editId, confirmEdit, deleteBook, setErrorSignup } = props
  setErrorSignup(null)
  return (
    <>
      <h1>books</h1>
      <BookGroup books={books} editBook={editBook} editId={editId} confirmEdit={confirmEdit} deleteBook={deleteBook} />
    </>
  )
}

export default Home

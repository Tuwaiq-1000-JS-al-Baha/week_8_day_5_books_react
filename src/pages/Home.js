
import BookGroup from "../components/BookGroup"
function Home(props) {
  const { books, editbook, editId, confirmEdit, deletebook, setErrorSignup } = props
  setErrorSignup(null)
  return (
    <>
      <h1>Books</h1>
      <BookGroup
        books={books}
        editbook={editbook}
        editId={editId}
        confirmEdit={confirmEdit}
        deletebook={deletebook}
      />
    </>
  )
}

export default Home

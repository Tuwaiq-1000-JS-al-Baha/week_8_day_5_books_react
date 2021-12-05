import { useContext } from "react"
import BookGroup from "../components/BookGroup"
import BookContext from "../utils/BookContext"

function Home() {
  const { setErrorSignup } = useContext(BookContext)
  // setErrorSignup(null)
  return (
    <>
      <h1>Books</h1>
      <BookGroup/>
    </>
  )
}

export default Home

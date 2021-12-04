import { useContext } from "react"
import BooksGroup from "../componets/BooksGroup"
import BooksContext from "../Utils/BooksContext"
function Home() {
  const {  setErrorSignUp } = useContext(BooksContext)
  setErrorSignUp(null)
  return (
    <>
      <h1>Books</h1>
      <BooksGroup/>
    </>
  )
}

export default Home
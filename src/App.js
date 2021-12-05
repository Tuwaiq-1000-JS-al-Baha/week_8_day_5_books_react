import Navbar from "./component/Navbar"
import { Route, Routes, useNavigate } from "react-router"
import BooksContext from "./utils/BooksContext"
import { useEffect, useState } from "react"
import axios from "axios"
import Home from "./pages/Home"
import Signup from "./pages/Signup"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook"
import Profile from "./pages/Profile"

function App() {
  const [books, setBooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books")
      console.log(response.data)
      setBooks(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  useEffect(() => {
    getBooks()
    if (localStorage.userToken) {
      getProfile()
    }
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target

      const userBody = {
        first_Name: form.elements.first_Name.value,
        last_Name: form.elements.last_Name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      await axios.post("http://localhost:5000/api/users/signup", userBody)
      navigate("/login")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/users/login", userBody)
      const userToken = response.data
      localStorage.userToken = userToken
      getBooks()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("userToken")
    navigate("/")
  }

  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        author: form.elements.author.value,
        image: form.elements.image.value,
      }
      await axios.post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getBooks()
      navigate("/")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const confirmBook = async (e, BookId) => {
    e.preventDefault()
    try {
      const form = e.target

      const BookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        author: form.elements.author.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:5000/api/books/${BookId}`, BookBody, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const deleteBook = async e => {
    e.preventDefault()
    console.log("clicked")
    const bookId = e.target.id
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/users/profile", {
        headers: {
          Authorization: localStorage.userToken,
        },
      })
      setProfile(response.data)
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const store = {
    books: books,
    profile: profile,
    signup: signup,
    login: login,
    logout: logout,
    addBook: addBook,
    confirmBook: confirmBook,
    deleteBook: deleteBook,
  }
  return (
    <BooksContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

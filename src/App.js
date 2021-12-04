import axios from "axios"
import { useEffect, useState } from "react"
import NavbarItem from "./component/NavbarItem"
import Home from "./pages/Home"
import { Route, Routes, useNavigate } from "react-router-dom"
import BooksContext from "./utils/BooksContext"
import SignUp from "./pages/SignUp"
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
      setBooks(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  useEffect(() => {
    getBooks()
    if (localStorage.tokenBook) {
      getProfile()
    }
  }, [])

  const signup = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.photo.value,
      }
      console.log(userBody)
      await axios.post("http://localhost:5000/api/auth/signup", userBody)
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
      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const tokenBook = response.data
      localStorage.tokenBook = tokenBook
      getProfile()
      navigate("/")
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenBook")
  }
  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const bookBody = {
        description: form.elements.description.value,
        author: form.elements.author.value,
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      navigate("/")
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })

      setProfile(response.data)
      console.log(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const confirmBook = async (e, bookId) => {
    e.preventDefault()

    try {
      const form = e.target

      const bookBody = {
        description: form.elements.description.value,
        author: form.elements.author.value,
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:5000/api/books/${bookId}`, bookBody, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBooks()
    } catch (error) {
      console.log(error?.response?.data)
    }
  }

  const deleteBook = async e => {
    const bookId = e.target.id
    console.log(bookId)
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
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
  console.log(profile)
  return (
    <BooksContext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

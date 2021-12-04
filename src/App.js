import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddBook from "./pages/AddBook"
import Home from "./pages/Home"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import BooksContext from "./utils/BooksContext"
import OneBook from "./components/OneBook"
import Profile from "./pages/Profile"

function App() {
  const [books, setBooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getbooks = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books")
      setBooks(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  useEffect(() => {
    getbooks()
    if (localStorage.token) {
      getProfile()
    }
  }, [])

  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userBody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userBody)
      console.log("sign up success")
      navigate("/login")
    } catch (error) {
      console.log(error.response.data)
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
      const response = await axios.post("http://localhost:5000/api/auth//login", userBody)
      const token = response.data
      localStorage.token = token
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("token")
  }
  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getbooks()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const confirmBook = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
      const bookBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.put(`http://localhost:5000/api/books/${bookId}`, bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getbooks()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const deleteBook = async (e, Bookid) => {
    e.preventDefault()
    const id = e.target.id
    try {
      await axios.delete(`http://localhost:5000/api/books/${id}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getbooks()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const store = {
    books: books,
    profile: profile,
    signUp: signUp,
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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/book/:bookId" element={<OneBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

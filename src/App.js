import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import Navbar from "./components/Navbar"
import AddBook from "./pages/AddBook"
import Home from "./pages/Home"
import Login from "./pages/Login"
import OneBook from "./pages/OneBook"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import BooksContext from "./utils/BooksContext"

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
    if (localStorage.tokenPost) {
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

      const response = await axios.post("http://localhost:5000/api/auth/login", userBody)
      const tokenPost = response.data
      localStorage.tokenPost = tokenPost
      getProfile()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const logout = () => {
    localStorage.removeItem("tokenPost")
    setProfile({})
  }

  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const postBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }

      await axios.post("http://localhost:5000/api/books", postBody, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getPosts()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const confirmBook = async (e, postId) => {
    e.preventDefault()

    try {
      const form = e.target

      const bookBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        avatar: form.elements.image.value,
      }

      await axios.put(`http://localhost:5000/api/books/${postId}`, postBody, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getBooks()
    } catch (error) {
      console.log(error.response.data)
    }
  }

  const deleteBook = async bookId => {
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenPost,
        },
      })
      getBooks()
    } catch (error) {
      console.log(error.response.data)
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
    <PostsContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:bookId" element={<OneBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </PostsContext.Provider>
  )
}

export default App

import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import Navbar from "./components/Navbar"
import Addbook from "./pages/AddBook"
import Home from "./pages/Home"
import Login from "./pages/Login"
import OneBook from "./components/OneBook"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import BookContext from "./Utils/BookContext"

function App() {
  const [books, setbooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/books")
      setbooks(response.data)
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  useEffect(() => {
    getBook()
    if (localStorage.tokenBook) {
      getprofile()
    }
  }, [])
  const getprofile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const signUp = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userbody = {
        firstName: form.elements.firstName.value,
        lastName: form.elements.lastName.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
        avtar: form.elements.avtar.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userbody)
      navigate("/login")
    } catch (error) {
      console.log(error?.response?.data)
    }
  }
  const login = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const userbody = {
        email: form.elements.email.value,
        password: form.elements.password.value,
      }
      const response = await axios.post("http://localhost:5000/api/auth/login", userbody)
      const tokenBook = response.data
      localStorage.tokenBook = tokenBook
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenBook")
  }
  const addBook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookbody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.post("http://localhost:5000/api/books", bookbody, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBook()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const confirmBook = async (e, bookId) => {
    e.preventDefault()
    try {
      const form = e.target
      const bookbody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.put(`http://localhost:5000/api/books/${bookId}`, bookbody, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBook()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const deleteBook = async e => {
    e.preventDefault()
    const bookId = e.target.id
    try {
      await axios.delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBook()
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const store = {
    books: books,
    profile: profile,
    signUp: signUp,
    login: login,
    addBook: addBook,
    logout: logout,
    confirmBook: confirmBook,
    deleteBook: deleteBook,
  }
  return (
    <>
      <BookContext.Provider value={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/add-book" element={<Addbook />} />
          <Route path="/book/:bookId" element={<OneBook />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BookContext.Provider>
    </>
  )
}
export default App

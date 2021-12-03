import axios from "axios"
import { useState, useEffect } from "react"
import { Routes, Route, useNavigate } from "react-router"
import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import BooksContext from "./utils/BooksContext"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook"
import OneBook from "./pages/OneBook"
import Profile from "./pages/Profile"

function App() {
  const [books, setBooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()

  const getbooks = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/books")
      setBooks(response.data)
    } catch (error) {
      console.log(error?.response.data)
    }
  }
  useEffect(() => {
    getbooks()
    if (localStorage.token) {
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

      await axios.post("http://localhost:3001/api/auth/signup", userBody)
      console.log("sign in success")
      navigate("/login")
    } catch (error) {
      console.log(error?.response.data)
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

      const response = await axios.post("http://localhost:3001/api/auth/login", userBody)

      console.log("login success")

      const token = response.data
      localStorage.token = token
      getProfile()
      navigate("/")
    } catch (error) {
      console.log(error?.response.data)
    }
  }

  const logout = () => {
    localStorage.removeItem("token")
    setProfile("")
    navigate("/")
  }
  const addbook = async e => {
    e.preventDefault()

    try {
      const form = e.target
      const userBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        image: form.elements.image.value,
      }
      await axios.post("http://localhost:3001/api/books", userBody, {
        headers: {
          authorization: localStorage.token,
        },
      })
      getbooks()
      navigate("/")
    } catch (error) {
      console.log(error?.response.data)
    }
  }

  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:3001/api/auth/profile", {
        headers: {
          authorization: localStorage.token,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error?.response.data)
    }
  }
  const confirmbook = async (e, bookId) => {
    e.preventDefault()

    try {
      const form = e.target

      const bookBody = {
        title: form.elements.title.value,
        body: form.elements.body.value,
        avatar: form.elements.image.value,
      }
      await axios.put(`http://localhost:3001/api/books/${bookId}`, bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      getbooks()
    } catch (error) {
      console.log(error.response.data)
    }
    //   const editId = e.target.id
    //   setEditId(editId)
  }

  const deletebook = async bookId => {
    await axios.delete(`http://localhost:3001/api/books/${bookId}`, {
      headers: {
        Authorization: localStorage.token,
      },
    })
    console.log("you deleted the product")
    getbooks()
  }

  const store = {
    books: books,
    profile: profile,
    signup: signup,
    login: login,
    logout: logout,
    addbook: addbook,
    deletebook: deletebook,
    confirmbook: confirmbook,
  }
  return (
    <BooksContext.Provider value={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/addbook" element={<AddBook />} />
        <Route path="/book/:bookId" element={<OneBook />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

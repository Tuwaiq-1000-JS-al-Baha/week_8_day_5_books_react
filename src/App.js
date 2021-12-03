import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from "./componet/Navbar"
import { Route, Routes, useNavigate } from "react-router"
import Addbook from "./pages/Addbook"
import Home from "./pages/Home"
import Login from "./pages/login"
import OneBook from "./pages/OneBook"
import Profile from "./pages/profile"
import SignUp from "./pages/SignUp"
import BookContext from "./uitls/bookContext"

function App() {
  const [books, setBooks] = useState([])
  const [profile, setProfile] = useState(null)
  const navigate = useNavigate()
  const getBook = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/book/")
      setBooks(response.data)
    } catch (error) {
      console.log(error.response)
    }
  }
  useEffect(() => {
    getBook()
    if (localStorage.tokenbook) {
      getprofile()
    }
  }, [])

  const getprofile = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/user/profile/", {
        headers: {
          Authorization: localStorage.tokenbook,
        },
      })
      setProfile(response.data)
    } catch (error) {
      console.log(error.response)
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
        avatar: form.elements.avatar.value,
      }
      await axios.post("http://localhost:5000/api/user/signup", userbody)
      navigate("/login")
    } catch (error) {
      console.log(error.response)
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
      const response = await axios.post("http://localhost:5000/api/user/login", userbody)
      const tokenbook = response.data
      localStorage.tokenbook = tokenbook
      navigate("/")
    } catch (error) {
      console.log(error.response)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenbook")
  }
  const addbook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bookbody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.post("http://localhost:5000/api/book", bookbody, {
        headers: {
          Authorization: localStorage.tokenbook,
        },
      })
      getBook()
      navigate("/")
    } catch (error) {
      console.log(error.response)
    }
  }
  const confirm = async (e, bookid) => {
    e.preventDefault()
    try {
      const form = e.target
      const bookbody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.put(`http://localhost:5000/api/book/${bookid}`, bookbody, {
        headers: {
          Authorization: localStorage.tokenbook,
        },
      })
      getBook()
    } catch (error) {
      console.log(error.response)
    }
  }
  const deletbook = async e => {
    e.preventDefault()
    const id = e.target.id
    try {
      await axios.delete(`http://localhost:5000/api/book/${id}`, {
        headers: {
          Authorization: localStorage.tokenbook,
        },
      })
      getBook()
    } catch (error) {
      console.log(error.response)
    }
  }
  const store = {
    books: books,
    profile: profile,
    signUp: signUp,
    login: login,
    addbook: addbook,
    logout: logout,
    confirm: confirm,
    deletbook: deletbook,
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

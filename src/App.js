import axios from "axios"
import { useEffect, useState } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import BookContext from "./utils/BookContext"
import Navbar from "./component/Navbar"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import AddBook from "./pages/AddBook"
import Profile from "./pages/Profile"



function App() {

  const [books,setBooks]=useState([])
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
        photo: form.elements.photo.value,
      }
      await axios.post("http://localhost:5000/api/auth/signup", userBody)
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

      const response = await axios.post("http://localhost:5000/api/auth/login ", userBody)
      const tokenBook = response.data
      localStorage.tokenBook = tokenBook
      getProfile()
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokeBook")
    setProfile({})
  }
  const addBook = async e => {
    e.preventDefault()

    try {
      const form = e.target

      const postBody = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author:form.elements.author.value,
      }

      await axios.post("http://localhost:5000/api/books", postBody, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBooks()
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
  const store = {
    books: books,
    profile: profile,
    signup: signup,
    login: login,
    logout: logout,
    addBook: addBook,

  }
  return (
    <BookContext.Provider value={store}>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/addbook" element={<AddBook />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  </BookContext.Provider>
  )
}

export default App

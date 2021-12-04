import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, Route, Routes } from "react-router"
import NavbarBook from "./Components/NavbarBook"
import AddBook from "./Pages/AddBook"
import Books from "./Pages/Books"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import SignUp from "./Pages/SignUp"
import BookContext from "./utlis/BookContext"

function App() {
  const [books, setBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()
  const getBooks = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/books")
      setBooks(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  const addbook = async e => {
    e.preventDefault()
    try {
      const form = e.target
      const bodyAdd = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.post("http://localhost:7000/api/books", bodyAdd, {
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
  const editBook = e => {
    const id = e.target.id
    setEditId(id)
  }
  const confirmBook = async (e, id) => {
    e.preventDefault()

    try {
      const form = e.target
      const bodyBookEdit = {
        title: form.elements.title.value,
        description: form.elements.description.value,
        image: form.elements.image.value,
        author: form.elements.author.value,
      }
      await axios.put(`http://localhost:7000/api/books/${id}`, bodyBookEdit, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBooks()
      setEditId(null)
    } catch (error) {
      if (error.response) console.log(error.response.data)
      else console.log(error)
    }
  }
  const deleteBook = async e => {
    const bookId = e.target.id
    e.preventDefault()
    try {
      await axios.delete(`http://localhost:7000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })
      getBooks()
    } catch (error) {}
  }

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
      await axios.post("http://localhost:7000/api/auth/signup", userBody)
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
      const response = await axios.post("http://localhost:7000/api/auth/login", userBody)
      const tokenBook = response.data
      localStorage.tokenBook = tokenBook
      navigate("/")
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const getProfile = async () => {
    try {
      const response = await axios.get("http://localhost:7000/api/auth/profile", {
        headers: {
          Authorization: localStorage.tokenBook,
        },
      })

      const profileData = response.data
      setProfile(profileData)
    } catch (error) {
      console.log(error.response.data)
    }
  }
  const logout = () => {
    localStorage.removeItem("tokenBook")
  }

  useEffect(() => {
    getBooks()
    if (localStorage.tokenBook !== undefined) {
      getProfile()
    }
  }, [])

  const store = {
    books: books,
    signUp: signUp,
    login: login,
    addbook: addbook,
    logout: logout,
    deleteBook: deleteBook,
    confirmBook: confirmBook,
    editBook: editBook,
    profile: profile,
    editId: editId,
  }
  return (
    <>
      <BookContext.Provider value={store}>
        <NavbarBook />
        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="/add-book" element={<AddBook />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </BookContext.Provider>
    </>
  )
}

export default App

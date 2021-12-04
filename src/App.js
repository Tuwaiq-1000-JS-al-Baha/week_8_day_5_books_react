import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router"
import NavbarItem from "./compontes/Navbar"
import AddBook from "./pages/AddBook"
import Home from "./pages/Home"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import SignUp from "./pages/SignUp"
import BooksContext from "./utils/BooksContext"

function App() {
  const [books, setBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [errorSignUp, setErrorSignUp] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getBooks = () => {
    axios.get("http://localhost:5000/api/books").then(response => {
      const booksData = response.data

      // const booksSorted = booksData.sort((bookA, bookB) => bookB.dateCreated.localeCompare(bookA.dateCreated))
      setBooks(booksData)
    })
  }

  useEffect(() => {
    getBooks()
    if (localStorage.token !== undefined) {
      getProfile()
    }
  }, [])

  const addBook = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      title: form.elements.title.value,
      numberOfCopies: form.elements.numberOfCopies.value,
      author: form.elements.author.value,
    }
    axios
      .post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have added a book")
        getBooks()
        getProfile()
        setEditId(null)
        navigate("/")
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }
  const bookEdit = e => {
    const bookId = e.target.id
    setEditId(bookId)
  }
  const confirmEdit = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      title: form.elements.title.value,
      numberOfCopies: form.elements.numberOfCopies.value,
      author: form.elements.author.value,
    }
    axios
      .put(`http://localhost:5000/api/books/${editId}`, bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have edited the book")
        getBooks()
        getProfile()
        setEditId(null)
      })
      .catch(error => {
        // console.log(error.response.data)
      })
  }

  const deleteBook = e => {
    const bookId = e.target.id

    axios
      .delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have deleted the book")
        getBooks()
        getProfile()
      })
      .catch(error => {
        // console.log(error.response.data)
      })
  }

  const signUp = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      avatar: form.elements.avatar.value,
    }
    axios
      .post("http://localhost:5000/api/auth/signup", bookBody)
      .then(response => {
        console.log("sign Up success")
        getBooks()
        setErrorSignUp(null)
        navigate("/login")
      })
      .catch(error => {
        // console.log(error.response.data)
        // setErrorSignUp(error.response.data)
      })
  }

  const login = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    axios
      .post("http://localhost:5000/api/auth/login", bookBody)
      .then(response => {
        console.log("login success")
        const token = response.data
        localStorage.token = token
        getBooks()
        getProfile()
        setErrorLogin(null)
        navigate("/")
      })
      .catch(error => {
        // console.log(error.response.data)
        // setErrorLogin(error.response.data)
      })
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const getProfile = () => {
    axios
      .get("http://localhost:5000/api/auth/profile", {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        setProfile(response.data)
      })
  }

  const store = {
    logout: logout,
    books: books,
    bookEdit: bookEdit,
    editId: editId,
    confirmEdit: confirmEdit,
    deleteBook: deleteBook,
    addBook: addBook,
    signUp: signUp,
    errorSignUp: errorSignUp,
    login: login,
    errorLogin: errorLogin,
    profile: profile,
    setErrorSignUp: setErrorSignUp,
    setErrorLogin: setErrorLogin,
  }

  return (
    <BooksContext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<AddBook />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

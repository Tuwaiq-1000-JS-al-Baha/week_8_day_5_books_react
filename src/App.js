import axios from "axios"
import { useEffect, useState } from "react"
import NavBaritem from "./Componets/NavBaritem"
import { Routes, Route, useNavigate } from "react-router-dom"
import AddBooks from "./Pages/AddBook"
import Home from "./Pages/Home"
import SignUp from "./Pages/SignUp"
import Login from "./Pages/Login"
import Profile from "./Pages/Profile"
import BooksContext from "./utils/BooksContext"

function App() {
  const [books, setBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [errorSignup, setErrorSignup] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getBooks = () => {
    axios.get("http://localhost:5000/api/books").then(response => {
      const data = response.data
      // const sortPorduct = data.sort((dataA, dataB) => dataB.dateCreated.localeCompare(dataA.dateCreated))
      setBooks(data)
    })
  }

  const getProfile = () => {
    axios
      .get(`http://localhost:5000/api/auth/profile`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        const profileData = response.data
        setProfile(profileData)
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
      description: form.elements.description.value,
      image: form.elements.image.value,
      author: form.elements.author.value,
    }

    axios
      .post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        getBooks()
        navigate("./")
        console.log("you add a book")
        getProfile()
      })
      .catch(error => {
        console.log(error?.response?.data)
      })
  }

  const editBook = e => {
    const id = e.target.id
    setEditId(id)
  }

  const confirmEdit = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      title: form.elements.title.value,
      description: form.elements.description.value,
      image: form.elements.image.value,
      author: form.elements.author.value,
    }
    axios
      .put(`http://localhost:5000/api/books/${editId}`, bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(respone => {
        console.log("you edited this book")
        setEditId(null)
        getBooks()
        getProfile()
      })
      .catch(error => {
        console.log(error?.response?.data)
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
        console.log("you delete the book")
        getBooks()
        getProfile()
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const signUp = e => {
    e.preventDefault()
    const form = e.target

    const body = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      avatar: form.elements.avatar.value,
    }
    axios
      .post(`http://localhost:5000/api/auth/signup`, body)
      .then(resposne => {
        console.log("sign up success")
        setErrorSignup(null)
        navigate("./login")
      })
      .catch(error => {
        setErrorSignup(error.response.data)
      })
  }

  const login = e => {
    e.preventDefault()
    const form = e.target

    const body = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    axios
      .post(`http://localhost:5000/api/auth/login`, body)
      .then(resposne => {
        console.log("login success")
        setErrorLogin(null)

        const token = resposne.data
        localStorage.token = token
        getProfile()
        navigate("./")
      })
      .catch(error => {
        setErrorLogin(error.response.data)
      })
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  const store = {
    logout: logout,
    books: books,
    editBook: editBook,
    editId: editId,
    confirmEdit: confirmEdit,
    deleteBook: deleteBook,
    setErrorSignup: setErrorSignup,
    addBook: addBook,
    signUp: signUp,
    errorSignup: errorSignup,
    login: login,
    errorLogin: errorLogin,
    profile: profile,
  }

  return (
    <BooksContext.Provider value={store}>
      <NavBaritem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AddBooks" element={<AddBooks />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BooksContext.Provider>
  )
}

export default App

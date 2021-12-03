
import axios from "axios"
import { useEffect, useState } from "react"
import { Route, Routes, useNavigate } from "react-router-dom"
import Navbar from "./componets/Navbar"
import AddBook from "./pages/AddBook"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"
import BooksContext from "./Utils/BooksContext"


function App() {
  const [books, setBooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [errorSignup, setErrorSignUp] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getBook = () => {
    axios.get("http://localhost:5000/api/books").then(response => {
      // http://localhost:5000/api/books
      // https://vast-chamber-06347.herokuapp.com/api/products
      const bookData = response.data
      setBooks(bookData)
    })
  }
  const getProfile = () => {
    axios
      .get("http://localhost:5000/api/auth/profile", {
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
    getBook()
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
      auther: form.elements.auther.value,
      image: form.elements.image.value,
    }
    axios
      .post("http://localhost:5000/api/books", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have added book")
        getBook()
        getProfile()
        navigate("/")
      })
      .catch(error => {
        console.log(error)
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
      auther: form.elements.auther.value,
      image: form.elements.image.value,
    }
    axios
      .put(`http://localhost:5000/api/books/${editId}`, bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have edited book")
        setEditId(null)
        getProfile()
        getBook()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const deleteBook = e => {
    const BookId = e.target.id
    axios
      .delete(`http://localhost:5000/api/books/${BookId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you delete the Book")
        getBook()
        getProfile()
      })
      .catch(error => {
        console.log(error)
      })
  }

  const signUp = e => {
    e.preventDefault()
    const form = e.target
    const userBody = {
      firstName: form.elements.firstName.value,
      lastName: form.elements.lastName.value,
      email: form.elements.email.value,
      password: form.elements.password.value,
      avatar: form.elements.avatar.value,
    }
    axios
      .post("http://localhost:5000/api/auth/signup", userBody)
      .then(response => {
        console.log("sing up success")
        setErrorSignUp(null)
        navigate("/login")
      })
      // .catch(error => {
      //   console.log(error.response.data)
      //   setErrorSignUp(error.response.data)
      // })
  }
  const login = e => {
    e.preventDefault()
    const form = e.target
    const userBody = {
      email: form.elements.email.value,
      password: form.elements.password.value,
    }
    axios
      .post("http://localhost:5000/api/auth/login", userBody)
      .then(response => {
        console.log("login success")
        setErrorLogin(null)
        const token = response.data
        localStorage.token = token
        getProfile()
        navigate("/")
      })
      // .catch(error => {
      //   console.log(error.response.data)
      //   setErrorLogin(error.response.data)
      // })
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }
  const store ={
    books: books,
    logout: logout,
    editBook: editBook,
    editId: editId,
    confirmEdit:confirmEdit,
    deleteBook:deleteBook,
    setErrorSignUp: setErrorSignUp,
    setErrorLogin: setErrorLogin,
    errorLogin:errorLogin,
    errorSignup: errorSignup,
    addBook: addBook,
    editBook: editBook,
    signUp: signUp,
    login: login,
    profile:profile
  }


  return (
    < BooksContext.Provider value={store}>
      <Navbar  />
      <Routes>
        <Route path="/" element={ <Home />}/>
        <Route path="/add-books" element={<AddBook />} />
        <Route path="/signup" element={<SignUp  />} />
        <Route path="/login" element={<Login  />} />
        <Route path="/profile" element={ <Profile /> } />
      </Routes>
    </BooksContext.Provider >
  )
}

export default App

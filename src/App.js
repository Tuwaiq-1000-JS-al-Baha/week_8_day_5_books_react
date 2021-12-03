import axios from "axios"
import { useEffect, useState } from "react"
import Addbook from "./pages/Addbook"
import Navbar from "./components/Navbar"
import { Routes, Route, useNavigate } from "react-router-dom"
import Home from "./pages/Home"
import SignUp from "./pages/SignUp"
import Login from "./pages/Login"
import Profile from "./pages/Profile"

function App() {
  const [books, setbooks] = useState([])
  const [editId, setEditId] = useState(null)
  const [errorSignup, setErrorSignup] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getbooks = () => {
    axios.get("http://localhost:5000/api/books").then(response => {
      const booksData = response.data
      setbooks(booksData)
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
    getbooks()
    if (localStorage.token !== undefined) {
      getProfile()
    }
  }, [])

  const addbook = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      title: form.elements.title.value,
      description: form.elements.description.value,
      image: form.elements.image.value,
      author: form.elements.author.value,
    }
    axios
      .post("http://localhost:5000/api/books/", bookBody, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you have added a book")
        getbooks()
        getProfile()
        navigate("/")
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const editbook = e => {
    const bookId = e.target.id
    setEditId(bookId)
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
      .then(response => {
        console.log("you have edited the book")
        setEditId(null)
        getbooks()
        getProfile()
      })
      .catch(error => {
        console.log(error.response.data)
      })
  }

  const deletebook = e => {
    const bookId = e.target.id
    axios
      .delete(`http://localhost:5000/api/books/${bookId}`, {
        headers: {
          Authorization: localStorage.token,
        },
      })
      .then(response => {
        console.log("you deleted the book")
        getbooks()
        getProfile()
      })
      .catch(error => {
        console.log(error.response.data)
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
        console.log("sign up success")
        setErrorSignup(null)
        navigate("/login")
      })
      .catch(error => {
        console.log(error.response.data)
        setErrorSignup(error.response.data)
      })
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
      .catch(error => {
        console.log(error.response.data)
        setErrorLogin(error.response.data)
      })
  }

  const logout = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <>
      <Navbar logout={logout} />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              books={books}
              editbook={editbook}
              editId={editId}
              confirmEdit={confirmEdit}
              deletebook={deletebook}
              setErrorSignup={setErrorSignup}
            />
          }
        />
        <Route path="/add-book" element={<Addbook addbook={addbook} setErrorSignup={setErrorSignup} />} />
        <Route path="/signup" element={<SignUp signUp={signUp} errorSignup={errorSignup} />} />
        <Route path="/login" element={<Login login={login} errorLogin={errorLogin} />} />
        <Route
          path="/profile"
          element={
            <Profile
              profile={profile}
              editbook={editbook}
              deletebook={deletebook}
              confirmEdit={confirmEdit}
              editId={editId}
              books={books}
            />
          }
        />
      </Routes>
    </>
  )
}

export default App

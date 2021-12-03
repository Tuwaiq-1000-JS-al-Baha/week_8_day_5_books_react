const [editId, setEditId] = useState(null)
  const [errorSignUp, setErrorSignUp] = useState(null)
  const [errorLogin, setErrorLogin] = useState(null)
  const [profile, setProfile] = useState({})
  const navigate = useNavigate()

  const getBooks = () => {
    axios.get("http://localhost:5000/api/auth/Books").then(response => {
      const booksData = response.data

      
      setBooks(booksData)
    })
  }

  useEffect(() => {
    getBooks()
    if (localStorage.token !== undefined) {
      getProfile()
    }
  }, [])

  const addbook = e => {
    e.preventDefault()
    const form = e.target
    const bookBody = {
      title: form.elements.title.value,
      numberOfCopies: form.elements.numberOfCopies.value,
      author: form.elements.author.value,
    }
    axios
      .post("http://localhost:5000/api/auth/addbook", bookBody, {
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
      .put(`${editId}`, bookBody, {
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
       
      })
  }

  const deleteBook = e => {
    const bookId = e.target.id

    axios
      .delete(`http://localhost:5000/api/auth/delete${bookId}`, {
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
      .post("http://localhost:5000/api/auth/SignUp", bookBody)
      .then(response => {
        console.log("sign Up success")
        getBooks()
        setErrorSignUp(null)
        navigate("/login")
      })
      .catch(error => {
      
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
    confirmedit: confirmedit,
    deletebook: deletebook,
    addbook: addbook,
    signUp: signUp,
    errorSignUp: errorSignUp,
    login: login,
    errorLogin: errorLogin,
    profile: profile,
    setErrorSignUp: setErrorSignUp,
    setErrorLogin: setErrorLogin,
  }

  return (
    <bookscontext.Provider value={store}>
      <NavbarItem />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-book" element={<addbook />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </bookscontext.Provider>
  )


export default App
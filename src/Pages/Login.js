import { useContext } from "react";
import BookContext from "../utlis/BookContext";

function Login() {
  const{login}=useContext(BookContext)
    return (   <form onSubmit={login} >
      
            <label>email</label>
            <br />
            <input type="email" name="email" required />
            <br />
            <label>password</label>
            <br />
            <input type="password" name="password" required />
         <br />
            <button type="submit">login</button>
    
        </form>
          );
}

export default Login;
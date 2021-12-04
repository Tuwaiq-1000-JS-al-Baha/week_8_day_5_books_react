import { useContext } from "react";
import BookContext from "../utlis/BookContext";

function SignUp() {
    const{signUp}=useContext(BookContext)
    return ( <>
    <form onSubmit={signUp} >
    <label>first Name</label>
        <br />
        <input type="text" name="firstName" required />
        <br />
        <label>last Name</label>
        <br />
        <input type="text" name="lastName" required />
        <br />
        <label>email</label>
        <br />
        <input type="email" name="email" required />
        <br />
        <label>password</label>
        <br />
        <input type="password" name="password" required />
        <br />
        <label>Avatar</label>
        <br />
        <input type="url" name="avatar" required />
        <button type="submit">sign up</button>

    </form>
    
    
    </> );
}

export default SignUp;
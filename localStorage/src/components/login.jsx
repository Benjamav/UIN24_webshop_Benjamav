import { useEffect, useState } from "react";

export default function Login({ storageUser, setSignedIn }) {
    const [userLogin, setuserLogin] = useState([]);
    const [error, setError] = useState();

    const handleChange = (e) => {
      const inputName = e.target.name;
      const inputValue = e.target.value;

      setuserLogin((prev) => ({...prev, [inputName]: inputValue}))
      console.log(e.target.value, e.target.name);
    };

    const handleclick = (e)=>{
      e.preventDefault();
      const existingUser = JSON.parse(storageUser);
      const exists = 
      userLogin.username === existingUser.username &&
      userLogin.password === existingUser.password;
      console.log(exists);
      exists ? setSignedIn(true)
       : setError("Brukernavn eller passord stemmer ikke.");

      sessionStorage.setItem("login", true);
    };

    useEffect(()=>{
      sessionStorage.getItem("login")
      console.log("SessionStorage",login)
    }, [signedIn]);

    return (
      <section>
        <h1>Logg inn</h1>
        <form>
          <label>
            Brukernavn
            <input type="text" placeholder="Ackarlse..." name="username" />
          </label>
          <label>
            Passord
            <input type="password" placeholder="*********" name="password" />
          </label>
          <button>Logg inn</button>
        </form>
      </section>
    );
}
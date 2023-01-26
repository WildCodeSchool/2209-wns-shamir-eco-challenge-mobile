import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState<String>("");
  const [password, setPassword] = useState<String>("");
  const [confirmPassword, setConfirmPassword] = useState<String>("");
  const [mail, setMail] = useState<String>("");

  const handleClick = (event: any) => {
    event.preventDefault();
    console.log(username, password, confirmPassword, mail);
  };

  const handleUsername = (e: any) => {
    setUsername(e.target.value);
  };
  const handlePassword = (e: any) => {
    setPassword(e.target.value);
  };
  const handleConfirmPassword = (e: any) => {
    setConfirmPassword(e.target.value);
  };
  const handleMail = (e: any) => {
    setMail(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleClick}>
        <label>Choisissez un identifiant</label>
        <input type="text" name="username" onChange={handleUsername}></input>
        <label>Mot de passe</label>
        <input type="text" name="password" onChange={handlePassword}></input>
        <label>Confirmation du mot de passe</label>
        <input
          type="text"
          name="confirmpassword"
          onChange={handleConfirmPassword}
        ></input>
        <label>Adresse mail</label>
        <input type="text" name="mail" onChange={handleMail}></input>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

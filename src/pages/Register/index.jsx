import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../index.css'

function Register() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [err, setErr] = useState({
    emailError: '',
    passwordError: ''
    });
  

  const validateEmail = (email) => {
    return email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
  };

  function validate(emailRef, passwordRef) {
    let isValid = true;
    setErr({
      emailError: '',
      passwordError: '',
      repasswordError: ''
    });

    if (!validateEmail(emailRef.current.value)) {
      setErr(prevError => ({ ...prevError, emailError: "Email is incorrect" }));
      isValid = false;
    }

    if (!passwordRef.current.value) {
      setErr(prevError => ({ ...prevError, passwordError: "Password is empty" }));
      isValid = false;
    }

    return isValid;
  }

  function handelClick(e) {
    e.preventDefault();

    const isValid = validate(emailRef, passwordRef);
    if (isValid) {
      const user = {
        email: emailRef.current.value,
        password: passwordRef.current.value,
      };
      localStorage.setItem("user", JSON.stringify(user)); 
      navigate('/'); 
    }
  }

  return (
    <div className="Card">

      <h1>Sign Up</h1>
      <form>
        <input ref={emailRef} type="email" id="email" placeholder="Email address" />
        {err.emailError && (
          <p className='error' id="emailError">{err.emailError}</p>
        )}
        <input ref={passwordRef} type="password" id="password" placeholder="Password" />
        {err.passwordError && (
          <p className='error' id="passwordError">{err.passwordError}</p>
        )}
      </form>
      <button onClick={handelClick} className="btn">Create an account</button>
    </div>
  );
}

export default Register;
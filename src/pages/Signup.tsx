import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { setData, setToken } from "../redux/slices/userSlice";
import axios from "axios";

const Signup = () => {
  const token = useSelector((state: any) => state.user.token);

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    e.preventDefault();

    if (!email || !password) {
      return;
    }

    const user: any = { email, password };

    axios
      .post("http://localhost:3000/signup", user)
      .then((res) => {
        const { data } = res.data;

        const { user, token } = data;

        dispatch(setData(user));
        dispatch(setToken(token.token));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  if (token) {
    return <Navigate to="/" replace />;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Email"
          onChange={(e: any) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          onChange={(e: any) => setPassword(e.target.value)}
        />
        <button type="submit">Signup</button>

        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Signup;

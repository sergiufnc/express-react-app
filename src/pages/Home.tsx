import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate } from "react-router-dom";
import { removeData, removeToken } from "../redux/slices/userSlice";

const Home = () => {
  const token = useSelector((state: any) => state.user.token);

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(removeData());
    dispatch(removeToken());
  };

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>
      <p>Home</p>
      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;

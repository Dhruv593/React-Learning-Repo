import React from "react";
import UserContext from "../Context/UserContext";
import { useContext } from "react";

function Profile() {
  const { user } = useContext(UserContext);

  if(!user) return <div>Please Login</div>

  return <div>welcome {user.username}</div>
}

export default Profile;

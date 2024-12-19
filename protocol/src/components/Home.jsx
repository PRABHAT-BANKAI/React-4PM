import React, { useEffect, useState } from "react";

const Home = () => {
  const [user, setUser] = useState({});

  function handleSignOut() {
    localStorage.clear();
    window.location.reload();

  }
  console.log(user);

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  },[]);
  return (
    <div>
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>

      <button onClick={handleSignOut}>Sign Out</button>
    </div>
  );
};

export default Home;

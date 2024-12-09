import { createContext } from "react";
import Parent from "./components/Parent";
import { userContext } from "./components/context/context";
function App() {
  //create provider update

  const name = "hello from react";
  return (
    <userContext.Provider value={name}>
      <Parent />
    </userContext.Provider>
  );
}

export default App;

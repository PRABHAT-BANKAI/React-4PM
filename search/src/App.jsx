import { useState } from "react";

function App() {
  const [data, setData] = useState([
    "node",
    "expNess",
    "monGodb",
    "hTml",
    "mern",
  ]);
  const [search, setSearch] = useState("");
  // let data = ;
  let filterData = data.filter((data) => {
    let getData = data.toLowerCase();
    return getData.includes(search.toLowerCase());
  });
  const handleAsc = () => {
    // filterData.sort((a, b) => b - a);
  };

  const handleDes = () => {
    filterData = filterData.sort((a, b) => a - b);
    console.log(filterData);
  };
  return (
    <>
      <input
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
      <button onClick={handleAsc}>ascedning</button>
      <button onClick={handleDes}>descending</button>
      <div>
        {filterData.map((item, i) => {
          return <h1 key={i}>{item}</h1>;
        })}
      </div>
    </>
  );
}

export default App;

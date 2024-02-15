import { useState } from "react";
import useFetch from "./Hook/useFetch";
import Card from "./components/card";

function App() {
  const { data, error, loading } = useFetch("https://api.github.com/users");
  const [search, setSearch] = useState("");

  function searchUser(d) {
    setSearch(d.target.value);
  }

  return (
    <div>
      <h1 className="heading">Snap Shot 📷</h1>

      <div className="navbar">
        <input type="text" onChange={searchUser} />
      </div>

      <div className="container">
        {data.map((d) => {
          if (d.login.includes(search.toLowerCase())) return <Card data={d} />;
        })}
      </div>
    </div>
  );
}

export default App;

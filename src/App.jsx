import { useState } from "react";
import { puppyList } from "./src/data.js";
import "./index.css";
import "./App.css";

function App() {
  const [puppies, setPuppies] = useState(puppyList);
  const [featPupId, setFeatPupId] = useState(null);

  const handleClick = (obj) => {
    setFeatPupId(obj.id);
  };

  const featuredPup = puppies.find((pup) => pup.id === featPupId);

  return (
    <>
      <div className="App">
    {puppies.map((puppy) => {
      return (
            <p
              onClick={() => {
                handleClick(puppy);
              }}
              key={puppy.id}
            >
              {puppy.name}
            </p>
          );
        })}

    {featPupId && (
     <div id="puppyCard">
       <h2>{featuredPup.name}</h2>
        <ul>
        <li>Age: {featuredPup.age}</li>
       <li>Email: {featuredPup.email}</li>
        </ul>
      </div>
        )}
      </div>
    </>
  );
}

export default App;

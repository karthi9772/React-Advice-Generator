import { useEffect, useState } from "react";
import Axios from "axios";
import "./App.css";
const App = () => {
  const [Data, SetData] = useState("");
  const [input, SetInput] = useState("");

  const GetRandomAdvice = () => {
    Axios.get("https://api.adviceslip.com/advice").then((res) => {
      SetData(res.data.slip.advice);
    });
    console.log("Fetched");
  };

  const SearchAdvice = (query) => {
    if (query !== "") {
      Axios.get(`https://api.adviceslip.com/advice/search/${query}`).then(
        (res) => {
          SetData(res.data.slips[0].advice);
        }
      );
    } else {
      SetData("Enter a Valid Search");
    }
  };

  useEffect(() => {
    GetRandomAdvice;
  }, []);

  return (
    <div className="container">
      <div className="title">
        <h1 id="Title">Advice Generator</h1>
      </div>
      <div className="search">
        <input
          className="input"
          placeholder="Enter Keyword for Advice"
          value={input}
          onChange={(e) => SetInput(e.target.value)}
        ></input>
        <button
          onKeyDown={(e) => console.log(e)}
          className="btn"
          onClick={() => SearchAdvice(input)}
        >
          Get input Advice
        </button>
      </div>
      <div className="background">
        <div>
          <div>
            <h2>{Data}</h2>
          </div>
        </div>
      </div>
      <button className="advice-btn" onClick={() => GetRandomAdvice()}>
        Advice!
      </button>
    </div>
  );
};

export default App;

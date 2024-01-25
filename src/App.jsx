import { useEffect, useState } from "react";
import Axios from "axios";

const App = () => {
  const [Data, SetData] = useState(null);
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
    <div>
      <div className="background">
        <h2>{Data}</h2>
        <button onClick={() => GetRandomAdvice()}>Advice!</button>
      </div>
      <input value={input} onChange={(e) => SetInput(e.target.value)}></input>
      <button onClick={() => SearchAdvice(input)}>Get input Advice</button>
    </div>
  );
};

export default App;

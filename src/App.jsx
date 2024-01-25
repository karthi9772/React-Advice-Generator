import { useEffect } from "react";
import Axios from "axios";
const App = () => {
  Axios.get("https://api.adviceslip.com/advice").then((res) => {
    console.log(res.data.slip.advice);
  });

  return <div>Hrllośś</div>;
};

export default App;

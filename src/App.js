import Box from "./component/Box";
import "./App.css";
import { useState } from "react";

const choice = {
  rock: {
    name: "Rock",
    img: "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://t4.ftcdn.net/jpg/02/55/26/63/360_F_255266320_plc5wjJmfpqqKLh0WnJyLmjc6jFE9vfo.jpg",
  },
  paper: {
    name: "Paper",
    img: "https://i.ebayimg.com/images/g/6T4AAOSwQkNgXJyd/s-l1600.jpg",
  },
};

function App() {
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setComputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    const computerChoice = randomChoice();
    setComputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice));
  };

  const judgement = (user, computer) => {
    if (user.name === computer.name) {
      return "TIE";
    } else if (user.name === "Rock") {
      return computer.name === "Scissors" ? "WIN" : "LOSE";
    } else if (user.name === "Scissors") {
      return computer.name === "Paper" ? "WIN" : "LOSE";
    } else if (user.name === "Paper") {
      return computer.name === "Rock" ? "WIN" : "LOSE";
    }
  };

  const randomChoice = () => {
    const itemArray = Object.keys(choice); // 객체의 키값만 뽑아서 배열로 반환
    const randomItem = Math.floor(Math.random() * itemArray.length);
    const final = itemArray[randomItem];
    return choice[final];
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button className="btn" onClick={() => play("scissors")}>
          Scissors
        </button>
        <button className="btn" onClick={() => play("rock")}>
          Rock
        </button>
        <button className="btn" onClick={() => play("paper")}>
          Paper
        </button>
      </div>
    </div>
  );
}

export default App;

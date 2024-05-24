import Header from "./components/Header";
import "./App.css";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";

function App() {
  return (
    <>
      <Header />
      <main>
        <Scoreboard />
        <Board />
      </main>
      <footer></footer>
    </>
  );
}

export default App;

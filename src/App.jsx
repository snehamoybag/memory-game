import Header from "./components/Header";
import "./App.css";
import Board from "./components/Board";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <main>
        <Scoreboard />
        <Board />
      </main>
      <Footer />
    </>
  );
}

export default App;

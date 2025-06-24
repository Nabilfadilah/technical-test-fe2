import "./App.css";
// import Soal21 from "./components/Soal21";
import {TodoApp} from "./components/Soal21";
import Soal22 from "./components/Soal22";
import {ContactManager} from "./components/Soal23";

function App() {
  return (
    <>
      <div className="soal21">
        <p className="bgp">Soal 21:</p>
        {/* <Soal21 /> */}
        <TodoApp />
      </div>

      <div className="soal22">
        <p className="bgp">Soal 22:</p>
        <Soal22 />
      </div>

      <div className="soal23">
        <p className="bgp">Soal 23:</p>
        <ContactManager />
      </div>
    </>
  );
}

export default App;

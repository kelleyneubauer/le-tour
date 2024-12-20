import "./App.css";
import { Link } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <p>LE TOUR 2024</p>
            <p>
                <div>
                    <Link to="/masher">Button Masher</Link>
                </div>
                <div>
                    <Link to="/puzzle">Tipsy Tourney</Link>
                </div>
                <div>
                    <Link to="/trivia">Trivia</Link>
                </div>
                <div>
                    <Link to="/math">Shy Guy Says</Link>
                </div>
                <div>
                    <Link to="/balloons">Balloon Shot</Link>
                </div>
                <div>
                    <Link to="/wordle">Wordle</Link>
                </div>
            </p>
        </div>
    );
}

export default App;

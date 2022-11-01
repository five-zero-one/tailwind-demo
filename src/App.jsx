import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

export default function App() {
    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <Card/>
        </div>
    );
}

function Card() {
    return (
        <section class="card">
            <img src="http://placekitten.com/100/100" alt="cat" class="card-img" />
            <p class="card-contents">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </section>
    );
}
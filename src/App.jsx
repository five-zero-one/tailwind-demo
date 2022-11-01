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
    // hover:bg-neutral-600
    return (
        <section class="rounded-md border border-neutral-500 bg-neutral-700 hover:bg-neutral-600 transition-colors text-neutral-100 flex flex-row items-start cursor-pointer">
            <img class="card-img" src="http://placekitten.com/100/100" alt="cat" />
            <p class="card-contents">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </section>
    );
}

/**!SECTION
 * "rounded-md border border-neutral-500 bg-neutral-700 hover:bg-neutral-600 transition-colors text-neutral-100 flex flex-row items-start cursor-pointer">

  <img src="http://placekitten.com/100/100" alt="cat" class="py-4 pl-4 aspect-square" />

  <p class="mx-4 my-3 leading-4">

    Lorem ipsum dolor sit
 */
import { useEffect, useState } from "react";

export default function App() {
  const [dadJoke, setDadJoke] = useState("");
  const [count, setCount] = useState(0);

  async function getDadJoke() {
    const res = await fetch("https://icanhazdadjoke.com", {
      headers: {
        Accept: "application/json"
      }
    });
    const data = await res.json();
    setDadJoke(data.joke);
    setCount((c) => c + 1);
  }

  useEffect(function () {
    getDadJoke();
  }, []);

  return (
    <div>
      <h1>{dadJoke}</h1>
      <button onClick={getDadJoke}>Get another dad joke</button>
    </div>
  );
}

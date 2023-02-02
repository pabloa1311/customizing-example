import { useState } from "react";

const Homepage = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("hello")

  function handleClick() {
    let c = count
    setCount(c = c+1)
  }

  function handleInput(e) {
    setText(e.target.value)
  }

  return (
    <>
      <h1>I am the home page</h1>
      <button onClick={handleClick}>Click me</button>
      <p>The count is: {count}</p>
      <input value={text} onChange={handleInput}/>
      <p>You typed: {text}</p>
      <button onClick={() => {setText("Hello")}}>Reset Input</button>
    </>
  );
};

export default Homepage;

import cat from "../assets/ghoulies.jpg";
import { useState } from "react";

export default function Child({ name }) {
  // useState is just a function
  // As an argument it takes an initial value for a 'state' variable
  console.log(useState(0));
  // Logging useState returns an array, it's weird

  const [likes, setLikes] = useState(0);

  function handleLikes() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <p>{name} is the child</p>
      <img src={cat} onClick={handleLikes} />
      <span>i luv child x {likes}</span>
    </div>
  );
}

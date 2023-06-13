import React, { useState } from "react";

async function fetchGreeting() {
  const response = await fetch("/api/greeting");
  const data = await response.json();
  return data.greeting;
}

export function FetchGreetingButton() {
  const [greeting, setGreeting] = useState("");

  const handleClick = async () => {
    const result = await fetchGreeting();
    setGreeting(result);
  };

  return (
    <div>
      <button onClick={handleClick}>Get</button>
      {greeting && <h1>{greeting}</h1>}
    </div>
  );
}

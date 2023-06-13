import { useState } from "react";

export function ToggleButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <button onClick={() => setIsOpen(!isOpen)}>
      {isOpen ? "Open" : "Close"}
    </button>
  );
}

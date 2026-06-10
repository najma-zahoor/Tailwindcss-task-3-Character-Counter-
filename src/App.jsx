import { useState } from "react";
import "./App.css";

function App() {
  const [text, setText] = useState("");

  const charCount = text.length;

  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <div className="container">
      <div className="card">
        <h1>Character Counter</h1>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />

        <div className="stats">
          <p>Characters: {charCount}</p>
          <p>Words: {wordCount}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import ReactDOM from 'react-dom/client.js';
import { useState } from 'react';
import Background from './reactDev/Background.js';
import Box from './reactDev/Box.js';

const initialPosition = {
  x: 0,
  y: 0
};

export default function Canvas() {
  const [shape, setShape] = useState({
    color: 'orange',
    position: initialPosition
  });

  function handleMove(dx, dy) {
    setShape({ ...shape, position: { x: shape.position.x + dx, y: shape.position.y + dy } });
    console.log(shape.position.x, shape.position.y);
    console.log(dx, dy);
  }

  function handleColorChange(e) {
    setShape({
      ...shape,
      color: e.target.value
    });
  }

  return (
    <>
      <select
        value={shape.color}
        onChange={handleColorChange}
      >
        <option value="orange">orange</option>
        <option value="lightpink">lightpink</option>
        <option value="aliceblue">aliceblue</option>
      </select>
      <Background
        position={initialPosition}
      />
      <Box
        color={shape.color}
        position={shape.position}
        onMove={handleMove}
      >
        Drag me!
      </Box>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Canvas />)

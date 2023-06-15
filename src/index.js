import React from 'react';
import ReactDOM from 'react-dom/client';
import ListSnack from './reactDev/travelSnack';


export default function App() {
  return (
    <>
      <ListSnack />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

import React from 'react';
import ReactDOM from 'react-dom/client';
import Carousel from './reactDev/carousel';


export default function App() {
  return (
    <>
      <Carousel />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

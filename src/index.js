import React from 'react';
import ReactDOM from 'react-dom/client';
import Profile from './reactDev/Profile';

export default function App() {
  return (
    <>
      <Profile />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

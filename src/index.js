import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import Form from './reactDev/form';

export default function App() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");
  return (
    <>
      <Form setStat={setStatus} status={status} setAns={setAnswer} ans={answer} error={error} setEr={setError} />
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

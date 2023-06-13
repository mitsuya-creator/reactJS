import React from 'react';
import ReactDOM from 'react-dom/client';
import Form from './reactDev/form';

export default function App() {
  const statuses = [
    "empty", // disable button submit
    "submitting", // form completely disable, spinner shown
    "error", // enakble button submit ,with extra error mssg
    "success", // "Thank you" messsage instead of form
    "typing" // enable submit button
  ]
  return (
      <>
        {statuses.map(stats => {
          return (<section key={stats}>
          <h1>{stats}</h1>
          <Form status={stats}/>
          </section>)
        })}
      </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

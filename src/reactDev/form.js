import React from "react";

export default function Form({ setStat, status, setAns, ans, error, setEr }) {
  if (status === "success") return <h1>that's right</h1>
  async function handleSubmit(e) {
    e.preventDefault();
    setStat("submitting");
    try {
      await submitForm(ans);
      setStat("success");
    } catch (e) {
      setStat("typing");
      setEr(e.messages);
    }
  }
  return (
    <>
      <h1>Are U K ?
      </h1>
      <form>
        <textarea onChange={(e) => setAns(e.target.value)} value={ans} disabled={status === "submitting"} />
        <br />
        <button type="button" disabled={
          ans.length === 0 || status === "submitting"
        } onClick={handleSubmit}>submit</button>
        {error !== null && <p style={{ color: "red" }}> You got Error </p>}
      </form>
    </>
  )
}


function submitForm(ans) {
  const answer = "cianjur";
  return new Promise((resolve, rejected) => {
    setTimeout(() => {
      if (ans.toLowerCase() === answer) {
        resolve();
      } else {
        rejected(new Error("good gues! however that's incorrect"));
      }
    }, 1500);
  })
}
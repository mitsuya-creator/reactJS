import getFinalState from "./processQueue";
import React from "react";

function increment(n) {
    return n + 1;
}
increment.toString = () => "n => n+1";

function StateQueue() {
    return (
        <>
            <TestCase base={0} queue={[1, 1, 1,]} expected={1} />
            <hr />
            <TestCase base={0} queue={[5, increment, 4]} expected={4} />
            <hr />
            <TestCase base={0} queue={[increment, increment, increment]} expected={3} />

        </>
    )
}

function TestCase({ base, queue, expected }) {
    const actual = getFinalState(base, queue);
    return (
        <>
            <h1>Base {base}</h1>
            <h1>Queue [{queue.join(",")}]</h1>
            <h1>Expected Result {expected}</h1>
            <h1 style={{ color: actual === expected ? "green" : "red" }}> Your result : ({actual === expected ? "Correct" : "Wrong"})</h1>
        </>
    )
}

export default StateQueue;
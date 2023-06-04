import React from "react";


function getFinalState(baseState, queue) {
    let finalState = baseState;
    let x;
    for (x of queue) {
        typeof (x) === "function" ? finalState = x(finalState) : finalState = x;
    }
    return finalState;
}

export default getFinalState;
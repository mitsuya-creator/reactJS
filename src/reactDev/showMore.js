import React from "react";
import { useState } from "react";

export default function Accordion() {
    const [activeIndex, setActiveIndex] = useState(0);
    return (
        <>
            <h2>Cianjur, West Java</h2>
            <Panel title="About" isActive={activeIndex === 0} onShow={() => setActiveIndex(0)}>
                test
            </Panel>
            <Panel title="History" isActive={activeIndex === 1} onShow={() => setActiveIndex(1)} children="..." />

        </>
    )
}


function Panel({ title, children, isActive, onShow }) {
    return (
        <section>
            <h3>{title}</h3>
            {isActive ? <p>{children}</p> : <button type="button" onClick={onShow}>Show</button>}
        </section>
    )
}


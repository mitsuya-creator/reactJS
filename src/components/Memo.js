import { memo } from "react";
import React from "react";

function Todos({ todos }) {
    console.log("child render");
    return (
        <>
            <h2>My Todos</h2>
            {todos.map((todo, index) => {
                { console.log(<p key={index}>{todo}</p>) }
                return <p key={index}>{todo}</p>;
            })}
        </>
    )

}

export default memo(Todos);



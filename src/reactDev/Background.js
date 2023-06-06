import React from "react";
export default function Background({
    position
}) {
    return (
        <div style={{
            position: 'absolute',
            transform: `translate(
        ${position.x}px,
        ${position.y}px
      )`,
            width: 250,
            height: 250,
            backgroundColor: 'black',
        }} />
    );
};

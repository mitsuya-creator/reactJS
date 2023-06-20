import React from "react";
import { useState } from "react";


const initialContent = [
    { id: 0, header: "First Header", content: "This is contents of first header, I do not know how many i can create the header content and also i do not care because these are for learning or sample.", isShow: false },
    { id: 1, header: "Second Header", content: "This is contents of second heaader, I don not know how many i can create the header content and also i do not care because these are for learnig of sample only.", isShow: false }
];

function ListContents() {
    const [showMore, setShowMore] = useState(initialContent);
    return (
        <>
            {showMore.map(content => <section key={content.id}>
                <h1>{content.header}</h1>
                {content.isShow && <p>{content.content}</p>}
                <button type="button" onClick={() => setShowMore(showMore.map(c => {
                    if (c.id === content.id) {
                        return { ...content, isShow: !content.isShow }
                    } else {
                        return c;
                    }
                }))}>{content.isShow ? "lessMore" : "showMore"}</button>
            </section>
            )}
            {console.log(showMore)}
        </>
    )
}

export default ListContents;
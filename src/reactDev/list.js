import React from "react";
const mhs = ["Mitsuya", "Draken", "Hina", "Takeomi"]
function List() {
    const listMhs = mhs.map(person => <li>{person}</li>);
    return <ul>{listMhs}</ul>
}

export default List;
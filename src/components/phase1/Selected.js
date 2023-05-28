import {React, useState} from "react";

function MhsSelected(){
  const [mhs, setMhs] = useState("Mitsuya");
  const handleChange = event => setMhs(event.target.value);
  return (
    <form>
      <select value={mhs} onChange={handleChange}>
        <option value="Mitsuya">Mitsuya</option>
        <option value="Draken">Draken</option>
        <option value="Hina">Hina</option>
      </select>
    </form>
    )
}

export default MhsSelected;
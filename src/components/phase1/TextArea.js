import {useState, React} from "react";

function TextArea(){
  const [textArea, setTextArea] = useState("Content of TextArea in Value Attribut");
  const handleChange = event => setTextArea(event.target.value);
  return (
    <form>
      <textarea value={textArea} onChange={handleChange} />
    </form>
    )
}

export default TextArea;
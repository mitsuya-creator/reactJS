import React from 'react';
import ReactDOM from 'react-dom/client';
import { useState } from 'react';
import SearchBar from './reactDev/searchBar';
import filterItems from './reactDev/filterItems';
import mhs from './reactDev/data';

export default function App() {
  const [keyword, setKeyword] = useState("");
  const result = filterItems(mhs, keyword);
  result.map(item => item.name.split())
  return (
    <>
      <SearchBar
        word={keyword}
        setWord={setKeyword}
      />
      {/* {console.log(keyword)} */}
      <ListMhs items={result} query={keyword} />
      {/* {console.log(result)} */}
    </>
  )
}
function ListMhs({ items, query }) {
  return (
    <table>
      <tbody>
        {items.map(content => <tr key={content.id}>
          <td>{content.name.split()
            // .map((character, idx) => character === query.toUpperCase() || character === query ? <span key={idx} style={{ color: "red" }}>{character}</span> : <span key={idx}>{character}</span>
            // )
            // .forEach(character => character === query ? <span style={{ color: "red" }}>{character}</span> : { character })
          }</td>
          <td>{content.quote}</td>
        </tr>
        )}
      </tbody>
    </table>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />)

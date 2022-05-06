import { useEffect, useState } from "react";
import LoadingMask from "./components/LoadingMask";
import Book from "./components/Book";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


function App() {

  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const [input, setInput] = useState("");
  const [sort, setSort] = useState("descending")


  async function fetchBooks(){
    const res = await fetch("https://www.testdomain.com/v1/api/books");
    const resJSON = await res.json();

    console.log(resJSON);
    setBooks(resJSON);
    setLoading(false);
  }

  useEffect(
    () => {
      setLoading(true);
      fetchBooks();
  }, [])
  
  function sortBooks(){
    setBooks([...books.sort((a,b) => sort === "descending" ? b.year - a.year : a.year - b.year)]);
    setSort(sort === "descending" ? "ascending" : "descending");
  }


  return (
    <div className="App">
      { 
        loading ? <LoadingMask /> : 
          <>
            <Button variant="contained" onClick={sortBooks}>Gomb</Button>
            <TextField id="outlined-basic" label="Outlined" variant="outlined" value={input} onChange={({target}) => setInput(target.value)}/>
            {books.map(({title, author, year}) => (title.toLowerCase().includes(input.toLowerCase()) && <Book key={year} title={title} author={author} year={year}/>))}
          </>
      }
    </div>
  );
}

export default App;

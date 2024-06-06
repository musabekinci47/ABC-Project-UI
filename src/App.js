import React, { useState } from 'react';
import SearchBox from './components/SearchBox';
import SearchResults from './components/SearchResults';
import './styles.css';

const App = () => {
  const [results, setResults] = useState([]);
  const handleSearch = async (searchParams) => {
    // Burada API çağrısı yaparak sonuçları almak mümkün
    // Bu örnekte, örnek verilerle sonuçları simüle ediyoruz
    const myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
fetch("https://localhost:7094/Building", {
  method: "POST",
  headers: myHeaders,
  body: JSON.stringify(searchParams),
  redirect: "follow"
})
  .then((response) => response.text())
  .then((result) => {
    debugger;
    setResults(JSON.parse(result))
  })
  .catch((error) => console.error(error));
  };

  return (
    <div className="search-container">
      <h1>Emlak Arama</h1>
      <SearchBox onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
};

export default App;
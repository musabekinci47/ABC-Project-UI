import React from 'react';
import {locations,propertyTypes} from "../utils"

const SearchResults = ({ results }) => {
 
  return (
    <div className="results-container">
      {results?.map((result, index) => (
        <div className="result-item" key={index}>
          <img src={result.image} alt={result.name} />
          <div>
            <h2>{result.name}</h2>
            <p>Konum: {locations.find(x=>x.id==result.location).name}</p>
            <p>Fiyat: {result.price} TL</p>
            <p>Konut Tipi: {propertyTypes.find(x=>x.id==result.propertyType).name}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
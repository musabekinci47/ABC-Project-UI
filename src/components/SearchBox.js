import React, { useState } from 'react';

const SearchBox = ({ onSearch }) => {
  const [search ,setSearch]=useState({location:null,minPrice:null,maxPrice:null,propertyType:null});
  const onChange=(e)=>{
    setSearch({...search,[e.target.name]:parseInt(e.target.value)})
  }

  const handleSearch = () => {
    onSearch(search);
  };

  return (
    <div className="search-box">
       <select
        name='location'
        value={search.location}
        onChange={(e) => onChange(e)}
      >
        <option value="">Konum Seçiniz.</option>
        <option value="1">İstanbul</option>
        <option value="2">Ankara</option>
        <option value="3">İzmir</option>
        <option value="4">Adana</option>
      </select>
      <input
        name='minPrice'
        onChange={(e) => onChange(e)}
        type="number"
        placeholder="Minimum fiyat"
        value={search.minPrice}
      />
      <input
       name='maxPrice'
       onChange={(e) => onChange(e)}
       type="number"
       placeholder="Maksimum fiyat"
       value={search.maxPrice}
      />
      <select
        value={search.propertyType}
        name='propertyType'
       onChange={(e) => onChange(e)}
      >
        <option value="">Konut Tipi seçiniz.</option>
        <option value="1">Müstakil</option>
        <option value="2">Daire</option>
        <option value="3">Köşk</option>
        <option value="4">Villa</option>
      </select>
      <button onClick={handleSearch}>Ara</button>
    </div>
  );
};

export default SearchBox;
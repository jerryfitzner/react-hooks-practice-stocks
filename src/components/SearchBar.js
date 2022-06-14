import React, { useState } from "react";

function SearchBar({onFilterChange, setSortBy}) {
  const [isAlph, setisAlph] = useState(true);

  const handleSortChange = (e) => {
    setisAlph(!isAlph);
    setSortBy(e.target.value);
  };
  
  const handleFilterChange = (e) => {onFilterChange(e.target.value)};

  
  // const sortChange = () => {
  //   setisAlph(!isAlph);
  //   if(!isAlph === true){
  //     stocks.name.sort();
  // }}

  // const filter = (e) => {
  //   console.log(e.target.value);
  //   stocks.map(stock => {
  //     if(stock.type === e.target.value){ console.log(stock)}
  //   })
  // }

  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={isAlph}
          onChange={handleSortChange}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={!isAlph}
          onChange={handleSortChange}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilterChange}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;

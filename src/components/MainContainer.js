import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([]);
  const [portStocks, setPortStocks] = useState([]);
  const [sortBy, setSortBy] = useState("Alphabetically");
  const [filterBy, setFilterBy] = useState("Tech");

  useEffect(() => {
    fetch(`http://localhost:3001/stocks`)
      .then((r) => r.json())
      .then((stocks) => setStocks(stocks))
  }, [])

  
  const sortChange = [...stocks].sort((itemOne, itemTwo) => {
      if (sortBy === "Alphabetically") {
        return itemOne.name.localeCompare( itemTwo.name );
      } else {
        return itemOne.price - itemTwo.price;
      }
    })

  const filter = sortChange.filter((stock) => stock.type == filterBy) 
  
  
  const stockClick = (clickedStock) => {
    const portStocksInside = portStocks.find(stock => stock.id === clickedStock.id);

    if(portStocks.length === 0){
      setPortStocks([clickedStock]);
    } else if (portStocksInside === undefined || portStocksInside.id !== clickedStock.id){
      setPortStocks([...portStocks, clickedStock]);
    } else {
      console.log("Already Added To Portfolio")
    }
  }

  const deleteStockClick = (stock) => {
    const deleteStock = portStocks.filter((s) => s.id !== stock.id);
    setPortStocks(deleteStock);
    
  }

  return (
    <div>
      <SearchBar 
        onFilterChange={setFilterBy}
        setSortBy={setSortBy} />
      <div className="row">
        <div className="col-8">
          <StockContainer stocks={filter} stockClick={stockClick} />
        </div>
        <div className="col-4">
          <PortfolioContainer deleteStockClick={deleteStockClick} portStocks={portStocks} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;

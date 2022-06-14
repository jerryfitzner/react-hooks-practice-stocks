import React, { useState } from "react";
import Stock from "./Stock";

function PortfolioContainer({ deleteStockClick, portStocks }) {

  const deleteClick = (clickedStock) => {
    deleteStockClick(clickedStock);
  };


  return (
    <div>
      <h2>My Portfolio</h2>
      {
        portStocks.map((stock) => <Stock key={stock.name} stock={stock} stockClick={deleteClick} />)
      }
    </div>
  );
}

export default PortfolioContainer;

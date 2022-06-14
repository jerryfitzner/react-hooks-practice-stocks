import React from "react";
import Stock from "./Stock";

function StockContainer({stocks, stockClick}) {



  return (
    <div>
      <h2>Stocks</h2>
      {stocks.map((stock) => <Stock key={stock.name} stock={stock} stockClick={stockClick} />)}
    </div>
  );
}

export default StockContainer;

import React from "react";

function Stock({ stock, stockClick }) {
  // console.log(stockClick)
  
  const stockEvent = () => {
    stockClick(stock);
  }

  return (
    <div>
      <div className="card">
        <div className="card-body" onClick={stockEvent}>
          <h5 className="card-title">{stock.name}</h5>
          <p className="card-text">{stock.ticker}: {stock.price}</p>
        </div>
      </div>
    </div>
  );
}
export default Stock;

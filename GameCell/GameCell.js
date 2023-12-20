import React from "react";
import GameSymbol from "../GameSymbol/GameSymbol";

export default function GameCell({ isWinner, onClick, symbol }) {
  return (
    <button 
    className={`cell ${isWinner ? 'cell--win' : ''}`} 
    onClick={onClick}
  >
    {symbol ? <GameSymbol symbol={symbol} /> : null}
  </button>
  )
}
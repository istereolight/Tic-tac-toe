import React from "react";

export default function GameSymbol({ symbol }) {

  const getSymbolClassName = (symbol) => {
    if(symbol === 'O') return 'symbol--o';
    if(symbol === 'X') return 'symbol--x';
    return '';
  }

  return (
    <span className={`symbol ${getSymbolClassName(symbol)}`}>{symbol}</span>
  )
}
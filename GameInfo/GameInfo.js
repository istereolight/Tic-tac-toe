import React from "react";
import GameSymbol from "../GameSymbol/GameSymbol";

export default function GameInfo({ isDraw , winnerSymbol, currentStep}) {
  if(isDraw) {
    return (    
      <div className='game-info'>
        Ничья
      </div>
    )
  }
  if (winnerSymbol) {
    return (
      <div className='game-info'>
        Победитель: <GameSymbol symbol={winnerSymbol} />
      </div>
    )
  }
  return (
    <div className='game-info'>
      Ход: <GameSymbol symbol={currentStep} />
    </div>
  )
}
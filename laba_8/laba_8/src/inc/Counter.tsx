import React, { useState } from 'react';
import './Counter.css';
import Button from './Button';

const Counter = () => {
  const [clickCount, setClickCount] = useState<number>(0);
  const [buttonDisabledInc, setButtonDisableInc] = useState<boolean>(false)
  const [buttonDisabledReset, setButtonDisableReset] = useState<boolean>(true)
  const [color, setColor] = useState<string>('aqua')

  function increaseCount() {
    setClickCount(clickCount + 1);
    setButtonDisableReset(false);
    setColor('aqua');
    

    if(clickCount === 4){
      setColor('red')
      setButtonDisableInc(true);

    }

    if (clickCount === 5) 
      resetCount();
  }
  
  function resetCount() {
    setClickCount(0);
    setButtonDisableReset(true);
    setButtonDisableInc(false);
    setColor('aqua');
  }

  return (
    <div className="Counter">
      <div className='Counter' style={{color}}>{clickCount}</div>
      <Button nameButton='inc' onClickFunction={increaseCount} disabled={buttonDisabledInc}/>
      <Button nameButton='reset' onClickFunction={resetCount} disabled={buttonDisabledReset}/>
    </div>
  )
}

export default Counter;

import React, { FC, useState } from 'react';
import styles from './CounterButton.module.css';

interface CounterButtonProps {
  initialValue: number;
}

const CounterButton: FC<CounterButtonProps> = props => {
  const [counter, setCounter] = useState(props.initialValue);

  return <div className={styles.CounterButton} data-testid="CounterButton">
    <button onClick={() => setCounter(counter+1)}>{counter}</button>
  </div>
};

export default CounterButton;

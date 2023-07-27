import { useSelector, useDispatch } from 'react-redux'

import { counterActions } from '../store/counterSlice';
import classes from './Counter.module.css';

const Counter = () => {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)

  const incrementHandler = (value) => {
    dispatch(counterActions.increment(value))
  }

  const decrementHandler = (value) => {
    dispatch(counterActions.decrement(value))
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  }

  //  * Redux WITHOUT Toolkit
  // const incrementHandler = (value) => {
  //   dispatch({ type: 'increment', amount: value })
  // }

  // const decrementHandler = (value) => {
  //   dispatch({ type: 'decrement', amount: value })
  // }

  // const toggleCounterHandler = () => {
  //   dispatch({ type: 'toggle' })
  // };
  // * 

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <div>
        <button onClick={() =>incrementHandler(1)}>Increment</button>
        <button onClick={() => decrementHandler(1)}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;

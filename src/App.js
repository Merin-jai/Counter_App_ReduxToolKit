import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment,decrement,incrementByAmount } from './redux/counterSlice';

function App() {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter : {count}</h1>
      <button onClick={()=>dispatch(increment())}>+</button>&emsp;
      <button onClick={()=>dispatch(decrement())}>-</button>&emsp;
      <button onClick={()=>dispatch(incrementByAmount(5))}>+ 5</button>
    </div>
  );
}

export default App;


// useSelector → Retrieves state values from the Redux store.
// useDispatch → Dispatches actions to modify the Redux state.
// useSelector and useDispatch are the two main hooks provided by the react-redux library.
// They allow you to connect your React components to the Redux store and interact with it.
// useSelector is used to retrieve the state from the Redux store.
// useDispatch is used to dispatch actions to the Redux store.
// The useSelector hook takes a function as an argument, which is used to select the state value fromthe Redux store. The function takes the state as an argument and returns the value you want to retrieve.
// The useDispatch hook returns a dispatch function, which is used to dispatch actions to the Redux store. The dispatch function takes an action as an argument and dispatches it to the Redux store. The action is an object that contains the data you want to modify in the Redux stat
// Redux Actions (increment, decrement, incrementByAmount) → Imported from counterSlice.js, these update the state.


// useSelector() allows the component to access Redux state.
// state.counter.value → Retrieves the value from the counter slice in the Redux store.


// const dispatch = useDispatch();
// useDispatch() gives access to Redux’s dispatch() function.
// It is used to trigger actions (increment, decrement, etc.).
// dispatch(increment()) → Dispatches the increment action to the Redux store.

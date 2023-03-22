
import { useState } from 'react';
import { useReducer } from 'react';
const Counter = () => {
    const initialState = {
      count:0,
      numberToChangeBy:1
    }

    const reducer = (state, action) => {
      switch(action.type){
        case'add':
          console.log(state.count);
          return{
            ...state,
            count : parseInt(state.count, 10) + parseInt(state.numberToChangeBy, 10)}
        case'sub':
          return{
            ...state,
            count : state.count - state.numberToChangeBy}
          case'setNumber':
          return{
            ...state,
            numberToChangeBy: action.value
          }
      }
      return state;
    }
    //const [count, setCount] = useState(0);
    //const [numberToChangeBy, setNumberToChangeBy] = useState(1);
    const [state, dispatch] = useReducer(reducer, initialState);
    const updateField = (e) => {
      dispatch({type: e.target.name, value: e.target.value})
    }

    return (<div className="App">
    <pre className="rainbow box text-center">Value {state.count}</pre>
    <div className="flex gap center">
        <button className="button-box" onClick={() => dispatch({type:'add'})}><span className="huge">+</span>Increment by {state.numberToChangeBy}</button>
        <button className="button-box" onClick={() => dispatch({type:'sub'})}><span className="huge">-</span>Decrement by {state.numberToChangeBy}</button></div>
        <p className="flex gap center"><label className="button-box" htmlFor="number">Number to Increment/Decrement by </label><input className="input-box"  onChange={updateField} type="number" name="setNumber" id="number" /></p>
  </div>);
}

export default Counter;
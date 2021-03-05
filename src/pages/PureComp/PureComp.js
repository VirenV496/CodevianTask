/* 

import React, {useState} from 'react'; 
  
function App() { 
  const [number, setNumber] = useState(0) 
  const squaredNum =  squareNum(number); 
  const [counter, setCounter] = useState(0); 
  
 // Change the state to the input 
  const onChangeHandler = (e) => { 
    setNumber(e.target.value); 
  } 
    
  // Increases the counter by 1 
  const counterHander = () => { 
    setCounter(counter + 1); 
  } 
  return ( 
    <div className="App"> 
      <h1>Welcome to Geeksforgeeks</h1> 
      <input type="number" placeholder="Enter a number" 
        value={number} onChange={onChangeHandler}> 
      </input> 
        
      <div>OUTPUT: {squaredNum}</div> 
      <button onClick= {counterHander}>Counter ++</button> 
      <div>Counter : {counter}</div> 
    </div> 
  ); 
} 
  
// function to square the value 
function squareNum(number){ 
  console.log("Squaring will be done!"); 
  return Math.pow(number, 2); 
} 
  
export default App;

 */





import React, {useState, useMemo} from 'react'; 
  
function PureComp() { 
  const [number, setNumber] = useState(0) 
  // Using useMemo 
  const squaredNum = useMemo(()=> { 
    return squareNum(number); 
  }, [number]) 
  const [counter, setCounter] = useState(0); 
  
 // Change the state to the input 
  const onChangeHandler = (e) => { 
    setNumber(e.target.value); 
  } 
    
  // Increases the counter by 1 
  const counterHander = () => { 
    setCounter(counter + 1); 
  } 
  return ( 
    <div className="App"> 
      <h1>Welcome to Geeksforgeeks</h1> 
      <input type="number" placeholder="Enter a number"
          value={number} onChange={onChangeHandler}> 
      </input> 
        
      <div>OUTPUT: {squaredNum}</div> 
      <button onClick= {counterHander}>Counter ++</button> 
      <div>Counter : {counter}</div> 
    </div> 
  ); 
} 
  
// function to square the value 
function squareNum(number){ 
  console.log("Squaring will be done!"); 
  return Math.pow(number, 2); 
} 
  
export default PureComp;


















/* import React, {Component, PureComponent } from 'react'

export class PureComp extends PureComponent {

constructor(){
   super()
    this.state={
        Data:20
    }
}
    render() {
        console.log(this.state)
        return (
            <div>
                <h1>Pure Components {this.state.Data}</h1>
                <button onClick={()=> {this.setState({data:80})}}>onclick</button>
            </div>
        )
    }
}

export default PureComp;
 */



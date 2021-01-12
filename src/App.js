import './App.css';
import React,{useState} from 'react';
import "bootstrap/dist/css/bootstrap.css";
import Button1 from './Button1';
import Button2 from './Button2';
import Commencer from './Commencer';
function App() {
  const [enable,setEnable]=useState(false)
  const [i,seti]=useState(0)
  const Name=["David Guetta ","Justin temberlake","Cristiano Ronaldo","Lionel Messi","Shakira","Jeniifer Lopez","Kierra "]
  return (
    <div style={{backgroundColor:'black',height:'753PX',width:'100%'}} >

     {Name[i] ? <Commencer i={i} Name={Name} enable={enable} handleClick={()=>setEnable(true)} ></Commencer> :null}

     {Name[i] ? <Button1 enable={enable} incrementer={()=>seti(i+1)} >  </Button1>  :null}
     
      <Button2>

      </Button2> 

    </div>
  );
}

export default App;

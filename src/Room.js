import React, { useState } from 'react';
import './index.css';

function Room(){
    let [islit, setlit] = useState(false);
    let [age , setAge] = useState(45);
    let [temp , settemp ] = useState(72);
    return(
        <div className={ islit ? 'lit' : 'dark'}>
            The Room is { islit ? 'lit' : 'dark' }
            &nbsp;
            <button onClick={()=>{setlit(!islit)}}>Toggle Light</button>
            <br/><br/>
            Age {age} 
            &nbsp;
            <button onClick={()=>{setAge(age++)}}>Increase Age</button>
            <br/><br/>
            Room temperature {temp}
            &nbsp;
            <button onClick={()=>{settemp(temp++)}}>Increase Temperature</button>
            <button onClick={()=>{settemp(temp--)}}>Decrease Temperature</button>
        </div>
    );
}

export default Room;
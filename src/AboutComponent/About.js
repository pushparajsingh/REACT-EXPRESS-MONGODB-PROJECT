import { useState } from 'react';
import './About.css';

function About(p)
{

 const [currentDateTime,setCurrentDateTime] = useState(Date());
 setTimeout(()=>{
  setCurrentDateTime(Date());
 },1000); 

 const [count,setCount] = useState(0);
 
 const handleIncrement = ()=>{
  setCount(count => count + 1);    
 }

 const handleDecrement = ()=>{
    setCount(count => count - 1);    
 }
 
 return(
  <div>
  <div id="tooplate_main_top"></div>
     <div id="tooplate_main">
           
         <div class="col_fw">
             <h1>Welcome to myapp : {p.myuser} </h1>
             <h2>About component</h2>

             <h2>Date-Time : {currentDateTime}</h2>   

             <h1>Counter : {count}</h1>
             <button onClick={handleIncrement} >+</button>
             <button onClick={handleDecrement} >-</button>
             <button onClick={()=>{setCount(0)}} >Reset</button> 

             <div class="cleaner"></div>
         </div>
     
     <div class="cleaner"></div>       
   </div> 
   
     <div id="tooplate_main_bottom"></div>
 
 </div>
 )
}

export default About

import React, { useState } from 'react'
import { useActionState } from 'react'


const App = () => {
  

  //  const [num, setnum] = useState(20)


  //     function clickview(){
  //       console.log(setnum)

  //       setnum(38)

        //  console.log(setnum)

const [num, setnum] = useState(0)

if(change === 5){
  console.log("CONGO , DEAR")
}

function change(){

  setnum(num+1)

  
}
function changetwo(){

  setnum(num-1)
}


      

return (
    <div>

      {/* <h1>the value is {num}</h1> */}
      {/* <button  onClick={clickview}>click here</button> */}


      <button onClick={change}>INCREMENT</button>
      <button  onClick={changetwo}>DECREMENT</button>

      <p> {num}</p>

   




      
    </div>
  )

}
export default App

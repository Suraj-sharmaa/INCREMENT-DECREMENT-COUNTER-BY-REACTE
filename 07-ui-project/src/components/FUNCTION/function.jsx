import React from 'react'

const Function = () => {
  return (
    <div>
      hey im fn hehheheheheh
    </div>
  )
}


 function onchanging (){
    console.log("changing done ....")
  }


 return (

  <div>
    {/* <button onClick={btnclicked}>clicked me</button>

    <button onDoubleClick={() =>{

      console.log("hello indside")
    }}>button2</button> */}

  {/* <input  onChange={onchanging}type = "text" placeholder='enter your name'></input> */}

    <input  onChange={function(elem){

      console.log(elem.target.value)
    }}type = "text" placeholder='enter your name'></input>
    </div>
 
  )

export default Function

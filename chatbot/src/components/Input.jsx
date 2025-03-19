import React from 'react'

const Input = () => {

    const borderStyle = {
      
         width: '65%',
         height: '6rem'
    };
    const inputstyle = {
      border: 'none',
      outline: 'none',
      width: '100%',
      overflow: 'hidden'
    };
    const clearMsg  = () =>{
      // this will clear the message after sending the propmt
    }

    const send = ()=>{
      // the propmt will display on the console
      console.log('message sent', );
      clearMsg()
    }

  return (
    <div className='flex justify-center items-center mt-15'>

      <div style={borderStyle} className='flex flex-col border-2   border-white w-50 h-15 rounded-2xl'>

      <div className='flex justify-between m-3 '>
      <input style={inputstyle} type="text" placeholder='How Can i assist you today' className='' />
      <img src="src/assets/send.png" alt="" className='h-6 cursor-pointer ' onClick={send}/>
      </div>

      <div>
        <img src="src/assets/upload_icon.png" alt="" className='h-7 pl-2 cursor-pointer' />

      </div>

    </div>



    </div>
  )
}

export default Input
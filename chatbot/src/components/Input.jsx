import React from 'react'

const styles = {
    container : {
    display: 'flex',
    flexDirection: 'column',
    padding: '20px',
    margin: '2rem ',
    // alignItems: 'center',
    // justifyContent: 'center',
    height: '20vh',
    backgroundColor: '#424242',
    borderRadius: '10px',
    width: '70vw'
    },
    inputBox: {
        padding: '10px',
        margin: '10px',
        border: '2px solid #424242',
        borderRadius: '5px',
        width: '250px',
        fontSize: '16px',
      }
  };

const Input = () => {
  return (
    // <div className=' mt-6 '>
    //     <div className='border-2 w-200 p-3 min-h-20 rouded-full rounded-full'>
    //         <input type="text" placeholder='What do you want to know' className='border-hidden width-200'/>
    //     </div>
    // </div>
    <div style={styles.container}> 
         <input 
         type="text" 
         placeholder= "What do you want to know"
         style={styles.inputBox}
         />
    </div>
  )

 
}

export default Input
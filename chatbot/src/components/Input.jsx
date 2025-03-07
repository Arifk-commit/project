import React, { useState } from 'react'

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
        // padding: '10px',
        // margin: '10px',
        // border: '2px solid #424242',
        borderRadius: '5px',
        width: '250px',
        fontSize: '16px',
      }
  };
  

  
  const[isOpen,setIsOpen] = useState(false)


  const toggleDropdown = () => {
    setIsOpen(!isOpen);
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
         <div
          className='flex justify-between pt-3 mt-2'>
          <img src="src\assets\upload_icon.png" alt="" 
          className='h-7 cursor-pointer'
          />

          <div className='dropdown'>
          
          <div onClick={toggleDropdown} 
          
          className='flex items-center p-2   text-center' >
            <img src="
            src\assets\arrow_drop_down.png" alt="" 
            className='h-5 w-7 cursor-pointer '
            />

              </div>
            
             {isOpen &&(
              <ul className="dropdown-menu">
                <li className="dropdown-item">Option 1</li>
                <li className="dropdown-item">Option 2</li>
                <li className="dropdown-item">Option 3</li>
              </ul>
            )}
          
            
            
            </div>
            </div>
         </div>
   
    
  )


 
}

export default Input
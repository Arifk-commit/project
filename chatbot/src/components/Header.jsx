import React from 'react'


const header = () => {
  const content ={
    greet1: 'Welcome to EMY.',
    greet2: 'How can I help you today?'
  }
  return (
    <div className='flex flex-col text-center mt-30'>
        <p className='text-3xl'>
          {content.greet1}
        </p>
        <p className='text-2xl'>
          {content.greet2}
        </p>

    </div>
  )
}

export default header
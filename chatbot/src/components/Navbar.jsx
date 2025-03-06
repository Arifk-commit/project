import React from 'react'

const navbar = () => {
    return (
        <div className='flex items-center justify-between'>
            <h1 className='font-bold '>Grok</h1>
            <div className='flex gap-4'>
                <button className='flex items-center gap-1 border-1 bg-white text-black px-3 py-1 rounded-full cursor-pointer'>
                    <img src="src/assets/add-user.png" alt="" className='h-5' />
                    SignUp
                    </button>
                <button className='cursor-pointer'>SignIn</button>
            </div>
        </div>
    )
}

export default navbar
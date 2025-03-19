import React from 'react'

const navbar = () => {
    const nav = {
        title: 'EMY',
        signIn: 'SignIn',
        signUp: 'SignUp',
        Login: 'LogIn'
    }

    return (
        <div className='flex items-center justify-between p-6 m-3'>
            <p className='font-bold text-3xl '>{nav.title}</p>
            <div className='flex gap-4'>
                <button
                    className='flex items-center gap-1 border-1 bg-white text-black px-3 py-1 rounded-full cursor-pointer'>
                    {/* <img src="src/assets/add-user.png" alt="" className='h-5' /> */}
                    {nav.Login}
                </button>
                <button
                    className='cursor-pointer rounded-full  px-3 py-1 border-2 border-white'>
                    {nav.signUp}
                </button>
            </div>
        </div>
    )
}

export default navbar
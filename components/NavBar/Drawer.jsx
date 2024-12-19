import React from 'react'

const Drawer = ({setOpen}) => {
  return (
    <div className='absolute top-0 w-[100%] h-[100vh] flex justify-end z-[1000]' 
    style={{backgroundColor:"rgb(0,0,0,0.3)"}}
    onClick={()=>setOpen(false)}
    >
        <div className='w-[50%] h-[100vh] bg-white'>

        </div>
        
      
    </div>
  )
}

export default Drawer

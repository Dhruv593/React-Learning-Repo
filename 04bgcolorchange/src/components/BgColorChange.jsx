import React, { useState } from 'react'

function BgColorChange() {

    const [color, setColor] = useState('olive')

  return (
    <div className='w-full h-screen duration-200'
    style={{backgroundColor: color}}>
        <div className='flex justify-center fixed flex-wrap inset-x-0 bottom-12 px-2'>
            <div className='flex justify-center gap-2 flex-wrap rounded-3xl px-2 py-2 bg-white'>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-white'
                style={{backgroundColor: "red"}} onClick={() => setColor('red')}>Red</button>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-white'
                style={{backgroundColor: "Green"}} onClick={() => setColor('green')}>Green</button>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-white'
                style={{backgroundColor: "blue"}} onClick={() => setColor('blue')}>Blue</button>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-white'
                style={{backgroundColor: "pink"}} onClick={() => setColor('pink')}>pink</button>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-white'
                style={{backgroundColor: "orange"}} onClick={() => setColor('orange')}>Orange</button>
                <button className='shadow-lg px-4 py-2 rounded-full outline-none cursor-pointer text-black'
                style={{backgroundColor: "yellow"}} onClick={() => setColor('yellow')}>Yellow</button>
            </div>
        </div>
      
    </div>
  )
}

export default BgColorChange

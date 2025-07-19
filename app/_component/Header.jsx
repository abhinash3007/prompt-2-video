import Image from 'next/image'
import React from 'react'

function Header() {
  return (
    <div className='flex items-center gap-2'>
        <Image src={'/logo.svg'} alt="logo" width={30} height={30}></Image>
        <h2 className='text-2xl font-bold'>Prompt 2 Video</h2>
    </div>
  )
}

export default Header
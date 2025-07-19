import { Button } from '@/components/ui/button'
import React from 'react'

function Hero() {
    return (
        <div className='p-10 flex flex-col items-center justify-center mt-24 md:p-20 lg:p-36 xl:p-48'>
            <h2 className='font bold text-6xl items-center'>Hero</h2>
            <p className='mt-4 text-2xl text-center text-gray-500'></p>
            <div className='mt-7 gap-8 flex'> 
                <Button size="lg" variant="secondary" >Get Started</Button>
                <Button size="lg">Get Started</Button>
            </div>
        </div>
    )
}

export default Hero
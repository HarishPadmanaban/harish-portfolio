import React from 'react'
import { abilities } from '../constants'
import TitleHeader from '../components/TitleHeader'

function Cards() {
  return (
    <div id="cards" className="w-full padding-x-lg scroll-mt-28">
        
        <div className='mb-10'>
            <TitleHeader
            title="What I Bring Beyond Code"
            sub="🧠 Problem Solving, Collaboration & Growth Mindset"
            />
        </div>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({img,title ,description}) =>(
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <div className='size-14 flex items-center justify-center rounded-full'>
                        <img src={img} alt={title}/>
                    </div>
                    <h3 className='text-white text-2xl font-semibold mt-2'>{title}</h3>
                    <p className='text-white-50 text-lg'>{description}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Cards
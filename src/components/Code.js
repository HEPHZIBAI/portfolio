import React from 'react'
import Cod from '../assets/code.png'

const Code = () => {
  const config={
    codes:[
      {
        name:"Skillrack",
        link:"http://www.skillrack.com/profile/391511/ec85d145c054aeb9d0f007820d2ae13ca9d8892d"
      },
      {
        name:"Leetcode",
        link:"https://leetcode.com/u/hephzibai/"
      },
      {
        name:"Geeksforgeeks",
        link:"https://www.geeksforgeeks.org/user/hephzih5h5/"
      },
      {
        name:"HackerRank",
        link:"https://www.hackerrank.com/profile/hephzibai10"
      }
    ]
  }
  return (
    <div>
        <section id="resume" className='flex flex-col md:flex-row justify-center bg-blue-500 px-5 py-6'>
            
            <div className='md:w-1/2 flex justify-center text-white' >
              <div className='justify-center flex flex-col md:pl-5'>
                <h1 className='text-4xl border-b-2 mb-5  font-bold'>My Coding profile</h1>
                {config.codes.map((code,index)=>(
                    <div key={index} className='p-2'>
                        <p className='bg-blue-400 btn text-center font-bold '><a target='_blank' href={code.link}>{code.name}</a></p>
                    </div>
                ))}
                  
              </div>
            </div>
            <div className='w-1/2 md:w-1/2 flex md:justify-end'>
              <img src={Cod}/>
            </div>
        </section>
    </div>
  )
}

export default Code
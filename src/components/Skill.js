import React from 'react'

const Skill = () => {
  const config = {
    skills: [
      {
        category: 'Programming Languages',
        skills: ['C', 'C++', 'Python', 'Java']
      },
      {
        category: 'Frontend Skills',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Tailwind CSS']
      },
      {
        category: 'Backend Skills',
        skills: ['SQL', 'MongoDB']
      }
    ]
  }

  return (
    <div className='text-white bg-blue-400 py-10 px-5'>
      <h1 className='text-4xl font-bold border-b-2 w-[180px]'>My Skills</h1>
      <div className='flex flex-col md:flex-row mt-5 justify-center'>
        {config.skills.map((skillCategory, index) => (
          <div key={index} className={`px-5 ${index !== config.skills.length - 1 ? 'md:border-r-4' : ''} mb-5 md:mb-0`}>
            <h1 className='text-2xl font-bold'>{skillCategory.category}</h1>
            <div className='skill grid grid-cols-2 md:grid-cols-3 gap-2'>
              {skillCategory.skills.map((skill, idx) => (
                <div key={idx}>{skill}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Skill

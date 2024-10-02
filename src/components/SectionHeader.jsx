import React from 'react'

const SectionHeader = ({title,subtitle,button}) => {
  return (
    <div style={{width:'100%',display:'flex',justifyContent:'space-between' ,alignItems:'center'}}>
      <div>
      <h4  className='text-2xl my-4'>{subtitle}</h4>
      <h3  className='text-4xl font-bold mb-8 '>{title}</h3>
      </div>
      {button?<button className="text-xl text-green-500 px-6 py-2 rounded-full border border-solid border-green-500">Read more</button>:null}
      
    </div>
  )
}

export default SectionHeader

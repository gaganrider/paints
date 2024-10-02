import Image from 'next/image'
import React from 'react'
import SectionHeader from './SectionHeader'
import Link from 'next/link'

const Section3 = ({data}) => {
  return (
    <div className='px-20 mb-14'>
     <SectionHeader title='Wide Range Of Color' subtitle='category' />
      <div style={{display:'flex',height:'70vh'}}>
      <div className='flex-1 relative'>
      <Image 
      src={data?data[0].image.node.sourceUrl:''}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />
      <div 
      className='absolute bottom-0 flex items-center  justify-between w-full h-24 bg-yellow-500 px-5 bg-opacity-50 backdrop-blur-md '
      // style={{position:'absolute',bottom:0,display:'flex',justifyContent:'space-between',backgroundColor:'cyan',width:'100%'}}
      >
<h4 className='text-2xl font-normal text-white'>
  {data?data[0].title:''}
</h4>
<Link className='text-xl text-yellow-500 rounded-full bg-white px-6 py-2'  href={data?data[0].link:'/'}>Read More</Link>
      </div>
      </div>
      <div 
      className='flex-1 grid grid-cols-2 grid-rows-2 gap-6 pl-6'
      // style={{flex:1, display: 'grid',gridTemplateColumns: 'repeat(2, 1fr)', gridTemplateRows: 'repeat(2, 1fr)'}}
      >
      <div className='relative'>
      <Image 
      src={data?data[1].image.node.sourceUrl:''}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />

<div 
      className='absolute bottom-0 flex items-center  justify-between w-full h-16 px-3 '
      >
<h4 className='text-xl font-semibold text-white'>
  {data?data[1].title:''}
</h4>

      </div>
      </div>
      <div className='relative'>
      <Image 
      src={data?data[2].image.node.sourceUrl:''}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />
      <div 
      className='absolute bottom-0 flex items-center  justify-between w-full h-16 px-3 '
      >
<h4 className='text-xl font-semibold text-white'>
  {data?data[2].title:''}
</h4>

      </div>
      </div>
      <div className='relative'>
      <Image 
      src={data?data[3].image.node.sourceUrl:''}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />
      <div 
      className='absolute bottom-0 flex items-center  justify-between w-full h-16 px-3 '
      >
<h4 className='text-xl font-semibold text-white'>
  {data?data[3].title:''}
</h4>

      </div>
      </div>
      <div className='relative'>
      <Image 
     src={data?data[4].image.node.sourceUrl:''}
      width={500}
      height={500}
      alt="Picture of the author"
    //   layout="responsive"
      style={{objectFit: "cover",width:'100%',height:'100%'}}
      />
      <div 
      className='absolute bottom-0 flex items-center  justify-between w-full h-16 px-3 '
      >
<h4 className='text-xl font-semibold text-white'>
  {data?data[4].title:''}
</h4>

      </div>
      </div>

      </div>
      
      
      
      </div>
      
    </div>
  )
}

export default Section3

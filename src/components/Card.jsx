import React from 'react'

const Card = ({thumbnail, pfp, title, c_name, v_count, u_date}) => {
  return (
    <div className='card flex-col pb-8'>
      <div className='t_nail'><img className='tn rounded-lg' src={thumbnail} alt='thumbnail' width={240} height={100}></img></div>
      <div className='desc flex mt-4 h-16 pb-2'>
        <div className='pfp pt-3'><img className='p_picture rounded-full w-7 h-7' src={pfp} alt='pfp'></img></div>
        <div className='title pl-3'>
          <div className='heading font-semibold w-48 h-6' >{title}</div><br/>
          <span className='channel font-extralight h-1 text-sm'>{c_name}</span><br/>
          <span className='views font-thin text-xs'>{v_count}</span>
          <span className='upload font-thin text-xs'>{u_date}</span>
        </div>
      </div>
    
    
    </div>
  )
}

export default Card
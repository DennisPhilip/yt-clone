import React from 'react'
import vid from './sample-vid.mp4'
import vid2 from './fire_background_loop2_videvo2.mp4'
import img1 from './iphone_img.jpg'
import img2 from './apple-emblem.jpg'
import {FaEllipsisV} from "react-icons/fa";


const Hero = () => {
  return (
   <>
     <div className='Hero h-64 p-6 w-100pl-20 ml-48 mt-3 mr-48 '>
        <div className='vid ml-24 w-100 h-56 '>
          <video className='vid3 rounded-2xl w-96 h-52 ml-24' src ={vid} width={500} height={400} autoPlay={true} loop={true} controls></video> 
         </div> 
        <div className='img w-96 gap-x-0 '> 
          <img className='img1 rounded-xl w-96 h-24  ml-8' src={img1} alt='iphone-img' height={100} width={200} />  
          <div className='ok flex'>
             <img className='img2 rounded-full w-20 h-16 ml-10 mt-6 ' src={img2} alt='apple-logo' />
             <div className='okay grid '>
             <span className='h1 h-0 text-white font-semibold justify-center items-center mt-5 ml-4'>iPhone 15 Pro with titanium</span>
             <div className='yes pt-5'><span className='ad text-white font-bold ml-4' >Ad . </span><span className='ai font-thin'>Apple India</span></div>
             <button className='learnmore bg-blue-600 rounded-full mt-2 p-0' type='submit'>Learn More</button>
             </div>
             {/* <div className='options ml-96'> <FaEllipsisV/></div> */}
          </div> 
          <div className='options ml-96'> <FaEllipsisV className='ok1 mb-16'/></div>
        </div> 
     </div>
     


   </>
  )
}

export default Hero
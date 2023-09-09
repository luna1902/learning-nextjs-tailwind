//exporting images
//trying out css
//adding forms
//adding buttons
//ek nav ya div type container ke andr hi ek se zada div aa skte hain
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import autoprefixer from 'autoprefixer';
import { IconName } from "react-icons/fa6";

export default function imagee()
{
  return(

    <nav>
  <div className='pehla'>
  <Image
  className="object-center object-cover mx-auto aspect-auto "
  alt='images'
  src="/photo.jpg"
  height={400}
  width={100}
  />,
  <h1>hello</h1>
  <button className="bg-lime-400 hover:bg-violet-600 focus:outline " Link>Dammit</button>
  <form>  
    <input
    className="border-black px-4 py-4 border hover:bg-orange-700"
    type="text"
    placeholder="Swear out loud"/>
  </form>
  </div>
  <br/>
  <h1>damnn</h1>
  
  <div className="columns-3 md:columns-3">
   <img className="w-full aspect-square" src="/photo.jpg"/>
   <img className="w-full aspect-square" src="/photo.jpg"/>
   <img className="w-full aspect-square" src="/photo.jpg"/>
  </div>
  </nav> 

  
  );
}
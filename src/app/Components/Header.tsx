import React from 'react'
import Link from 'next/link'
const page = () => {
  return(
     <div className='bg-slate-300 flex w-full left-11 justify-evenly font-bold space-x-24 h-20 '>
        <Link href='/' className='m-7'>home</Link>
        <Link href='contact' className='m-7' >contact us</Link>
        <Link href='about' className='m-7'>about us</Link>
     </div>
  )
}

export default page
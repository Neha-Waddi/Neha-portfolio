import React from 'react'
import Image from 'next/image'
import Navbar from '../components/Navbar'

const page = () => {
  return (
    <section className='bg-black flex flex-wrap'>
        <Navbar/>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:ml-20 sm:ml-20'>
        <Image 
          src="/images/int_cert.jpg"
          width={300}
          height={300}
          className='m-20  shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110  '
          style={{ 
          
            border: '1px solid #000000', 
          }}
          
        />
        <Image 
          src="/images/aws_cert.jpg"
          width={300}
          height={300}
          className='m-20  shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110  '
          style={{ 
          
            border: '1px solid #000000', 
          }}
          
        />
        <Image 
          src="/images/Screenshot 2024-05-19 173306.png"
          width={300}
          height={300}
          className='m-20  shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110  '
          style={{ 
          
            border: '1px solid #000000', 
          }}
          
        />
  
        <Image 
          src="/images/Screenshot 2024-05-19 173337.png"
          width={300}
          height={300}
          className='m-20  shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110 '
          style={{ 
          
            border: '1px solid #000000', 
          }}
        />
        <Image 
          src="/images/Screenshot 2024-05-19 173406.png"
          width={300}
          height={300}
          className='m-20 shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110 '
          style={{ 
          
            border: '1px solid #000000', 
          }}
        />
         <Image 
          src="/images/Screenshot 2024-05-19 174630.png"
          width={300}
          height={300}
          className='m-20 shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110'
          style={{ 
          
            border: '1px solid #000000', 
          }}
        />
         <Image 
          src="/images/Screenshot 2024-05-19 174706.png"
          width={300}
          height={300}
          className='m-20 shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110'
          style={{ 
          
            border: '1px solid #000000', 
          }}
          
        />
         <Image 
          src="/images/Screenshot 2024-05-19 174732.png"
          width={300}
          height={300}
          className='m-20 shadow-md hover:shadow-lg transition duration-300 ease-in-out  hover:scale-110'
          style={{ 
          
            border: '1px solid #000000', 
          }}
        />
        </div>
    </section>
  )
}

export default page
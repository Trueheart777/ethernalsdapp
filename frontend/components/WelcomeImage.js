import React from 'react';
// import Image from 'next/image';

export default function WelcomeImage( props ) {
  return (
    <div className='text-white text-2xl'>
      Welcome
       <img src={require('../public/cryptodevs/4.svg')} alt="Welcome Picture"
         width={400}
        height={400} />
    </div>
  )
}

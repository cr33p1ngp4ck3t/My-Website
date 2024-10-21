import React from 'react';
import Typewriter from 'typewriter-effect';
import '@/app/styles/opt.css'

export default function HeroSection() {
  return (
    <div>
      <h3 className='headline' >
        <Typewriter
          options={{
            strings: ['Aspiring Web Developer', 'SEO Specialist'],
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 75,
          }}
        />
      </h3>
    </div>
  );
}

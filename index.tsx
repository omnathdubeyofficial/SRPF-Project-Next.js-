
//import { Inter } from '@next/font/google'
//import styles from '../styles/Home.module.css'

import Link from 'next/link'
import Image from 'next/image'


import About from './about';
import Contact from './contact';
import Gallary from './gallery';
import Hero from './hero';
import Services from './services';
import Video from './video';


// export default function Home() {
//   return (
//     <>
//       <h1>Home Page 1</h1>
//       <li><Link href="/about"> About </Link></li>
//       <li><Link href="/recommendations/123"> Recommendation 123</Link></li>
//       <li><Link href="/recommendations/456"> Recommendation 456</Link></li>
//     </>
//   )
// }
// import React from "react";

function Home() {
  return (
    <div>
      <Hero/>
      
      <Video/>
      <Gallary/>
      <About/>
      <Services/>
      <Contact/>
    </div>
  );
}

export default Home;
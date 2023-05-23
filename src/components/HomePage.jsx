import React from 'react';
import Tagline from './Tagline';
import {Card, FirstCard} from './Card';
import Form from './Form';
import Footer from './Footer';
import Section4 from './Section4';
import Section9 from './Section9';
import HeroSection from './HeroSection';


const HomePage = () => {
  return (
    <>
<HeroSection/>
<FirstCard/>

<Tagline/>

<section className='grid md:grid-cols-2  lg:grid-col-3 justify-center  my-10 gap-6'>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
<Card/>
</section>


<Form/>
<Section9/>
<Footer/>
</>




  ) 
}

export default HomePage






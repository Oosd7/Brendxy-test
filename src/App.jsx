import { useState } from 'react'
import { useRef } from 'react'
import Home from '../components/Home'
import Scrollbar from '../components/Scrollbar'
import Header from '../components/Header'
import Brendxy from '../components/Brendxy'
import './fonts/DINPro.woff2'
import './fonts/Gilroy-ExtraBold.woff2'
import './fonts/Gilroy-Light.woff2'
import './app.css'
import './normalize.css'



const App = () => {
  const scrollContainerRef = useRef(null);

  const goToFirstSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: 0,  
        behavior: 'smooth',
      });
    }
   
  };
  const goToSecondSlide = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({
        left: window.innerWidth,
        behavior: 'smooth', 
      });
    }
  };
  return (
    <>
    <div className='horizontal-scroll-container' ref={scrollContainerRef}>
      <Header goToFirstSlide={goToFirstSlide} /> {/* При нажатии на домик возврат на первый слайд */}
      <Home goToSecondSlide={goToSecondSlide}/> {/* При нажатии на кнопку переход на второй слайд */}
      <Scrollbar/>
      <Brendxy/>
    
    </div>
    </>
  )
}

export default App

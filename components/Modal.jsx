import React, {useState} from 'react';
import '../src/modal.css'; 
import bottleImage from '../images/bottle.png'; 
import DynamicBalls from './DynamicBalls';

const balls = [
    { id: 'bub1', top: '7%', left: '17%',backgroundImage:'url(../images/bubbles/1b.png)',width: 74, height: 76,animate:{x:[0,50,0],y:[0,10,0]},zIndex:100,scaleVar:'--scale' },
    { id: 'bub2', top: '17%', left: '17%',backgroundImage:'url(../images/bubbles/2b.png)',width: 136, height: 138,animate:{x:[0,-70,0],y:[0,-50,0],rotate:-30},zIndex:100,scaleVar:'--scale'},
    { id: 'bub3', top: '50%', left: '0%',backgroundImage:'url(../images/bubbles/3b.png)',width: 66, height: 66,animate:{x:[0,50,0],y:[0,70,0]},zIndex:1,scaleVar:'--scale'},
    { id: 'bub4', top: '75%', left: '25%',backgroundImage:'url(../images/bubbles/4b.png)',width: 123, height: 123,animate:{x:[0,-30,0],y:[0,-30,0]},zIndex:0,scaleVar:'--scale'},
    { id: 'bub5', top: '17%', left: '6%',backgroundImage:'url(../images/bubbles/1r.png)',width: 68, height: 68,animate:{x:[0,30,0],y:[0,20,0]},zIndex:0,scaleVar:'--scale' },
    { id: 'bub6', top: '90%', left: '20%',backgroundImage:'url(../images/bubbles/5b.png)',width: 285, height: 130,animate:{y:[0,-10,0]},zIndex:100,scaleVar:'--scale'},
    { id: 'bub7', top: '30%', left: '15%',backgroundImage:'url(../images/bubbles/2r.png)',width: 225, height: 224,animate:{x:[0,25,0],y:[0,5,0]},zIndex:0,scaleVar:'--scale'},
    { id: 'bub8', top: '75%', left: '5%',backgroundImage:'url(../images/bubbles/3r.png)',width: 149, height: 149,animate:{x:[0,-80,0],y:[0,-30,0]},zIndex:1,scaleVar:'--scale'},
  ];

const Modal = ({ onClose }) => {
    const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { subtitle: "Преимущества", title: "BRENDXY", content1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ",content2: "Faucibus pulvinar elementum integer enim",content3: "Faucibus pulvinar elementum integer enim",content1_order:'01',content2_order:'02',content3_order:'03' },
    { subtitle: "Преимущества", title: "BRENDXY", content1: "Mi bibendum neque egestas congue quisque egestas diam",content2: "Venenatis lectus magna fringilla urna",content3: "Venenatis lectus magna fringilla urna",content1_order:'01',content2_order:'02',content3_order:'03' },
  ];

  const goToPreviousSlide = () => {
    console.log('prev slide');
    setCurrentSlide((prev) => (prev > 0 ? prev - 1 : slides.length - 1));
  };

  const goToNextSlide = () => {
    console.log('next slide');
    setCurrentSlide((prev) => (prev < slides.length - 1 ? prev + 1 : 0));
  };
  return (
    <div className="modal-overlay">
    <img src={bottleImage} alt="Bottle" className="bottle" />
    {balls.map((ball) => (
      <DynamicBalls key={ball.id} {...ball} className="dynamic-balls" />
    ))}
    <div className="modal-content">
      <span className="close-button" onClick={onClose}>&times;</span>
      <div className="content-container">
        <div className="modal-header">
          <h3 className='model-header__subtitle'>{slides[currentSlide].subtitle}</h3>
          <h2 className='model-header__title'>{slides[currentSlide].title}</h2>
        </div>
        <div className="modal-body">
            <ul className='modal-body__content'>
                <li className='modal-body__content-el'>
                    <b><p className='content__order'>{slides[currentSlide].content1_order}</p></b>
                    <p>{slides[currentSlide].content1}</p>
                </li >
                <li className='modal-body__content-el'>
                    <b><p className='content__order'>{slides[currentSlide].content1_order}</p></b>
                    <p>{slides[currentSlide].content2}</p>
                </li>
                <li className='modal-body__content-el'>
                    <b><p className='content__order'>{slides[currentSlide].content1_order}</p></b>
                    <p>{slides[currentSlide].content3}</p>
                </li>
            </ul>
            
         
        </div>
        <div className="modal-footer">
          <button onClick={goToPreviousSlide} className="nav-button left">&#9664;</button>
          <div className="indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`indicator ${currentSlide === index ? "active" : ""}`}
              ></span>
            ))}
          </div>
          <button onClick={goToNextSlide} className="nav-button right">&#9654;</button>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Modal;
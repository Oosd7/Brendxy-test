import React, {useState} from "react";
import {motion} from 'framer-motion';
import Modal from "./Modal";
import DynamicBalls from '../components/DynamicBalls'
import bottle from '/images/bottle.png'
import '../src/brendxy.css'
import bb1 from '../images/bubbles/1b.png';
import bb2 from '../images/bubbles/2b.png';
import bb3 from '../images/bubbles/3b.png';
import bb4 from '../images/bubbles/4b.png';
import bb5 from '../images/bubbles/5b.png';
import rb1 from '../images/bubbles/1r.png';
import rb2 from '../images/bubbles/2r.png';
import rb3 from '../images/bubbles/3r.png';
import button2 from '../src/btn1.png';
import bg3 from '../images/bg3.png';


const Brendxy = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    
    const balls = [
        { id: 'bub1', top: '7%', left: '17%',backgroundImage:`url(${bb1})`,width: 74, height: 76,animate:{x:[0,50,0],y:[0,10,0]},zIndex:100,scaleVar:'--scale' },
        { id: 'bub2', top: '17%', left: '17%',backgroundImage:`url(${bb2})`,width: 136, height: 138,animate:{x:[0,-70,0],y:[0,-50,0],rotate:-30},zIndex:100,scaleVar:'--scale'},
        { id: 'bub3', top: '50%', left: '0%',backgroundImage:`url(${bb3})`,width: 66, height: 66,animate:{x:[0,50,0],y:[0,70,0]},zIndex:1,scaleVar:'--scale'},
        { id: 'bub4', top: '75%', left: '25%',backgroundImage:`url(${bb4})`,width: 123, height: 123,animate:{x:[0,-30,0],y:[0,-30,0]},zIndex:0,scaleVar:'--scale'},
        { id: 'bub5', top: '17%', left: '6%',backgroundImage:`url(${rb1})`,width: 68, height: 68,animate:{x:[0,30,0],y:[0,20,0]},zIndex:0,scaleVar:'--scale' },
        { id: 'bub6', top: '90%', left: '20%',backgroundImage:`url(${bb5})`,width: 285, height: 130,animate:{y:[0,-10,0]},zIndex:100,scaleVar:'--scale'},
        { id: 'bub7', top: '30%', left: '15%',backgroundImage:`url(${rb2})`,width: 225, height: 224,animate:{x:[0,25,0],y:[0,5,0]},zIndex:0,scaleVar:'--scale'},
        { id: 'bub8', top: '75%', left: '5%',backgroundImage:`url(${rb3})`,width: 149, height: 149,animate:{x:[0,-80,0],y:[0,-30,0]},zIndex:1,scaleVar:'--scale'},
      ];
return (        
            <div className="section" style = {{backgroundImage:`url(${bg3})`}}>
                    <img src={bottle} alt="Bottle" className="bottle" />
                    {balls.map((ball) => (
                            <DynamicBalls 
                            key={ball.id} 
                            {...ball}
                            
                            />
                        ))}
                    <div className="brendxy">
                    <div className="banner">
                        <div className="banner__subtitle">Ключевое сообщение</div>
                        <div className="banner__title">
                            BREND<strong>XY</strong>
                        </div>
                    </div>
                    <div className="brendxy__inner">
                        <div className="brendxy__inner-box1">
                            <p>
                            Ehicula ipsum a arcu 
                            cursus vitae. Eu non 
                            diam phasellus 
                            vestibulum lorem sed 
                            risus ultricies
                            </p>
                        </div>
                        <div className="brendxy__inner-box2-element">
                        <div className="brendxy__inner-box2">
                            <p>
                            A arcu cursus vitae
                            </p>
                            
                        </div>
                        <button className='brendxy__button' onClick={openModal} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
                            <img  src={button2} style={{ width:350, height: 100 }} />
                        </button>
                        {isModalOpen && <Modal onClose={closeModal} />}
                            
                        </div>
                        
                    </div>
                    
                    </div>
                    
                
                
                
            </div>
        )


    }
export default Brendxy

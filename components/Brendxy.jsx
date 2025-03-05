import React, {useState} from "react";
import {motion} from 'framer-motion';
import Modal from "./Modal";
import DynamicBalls from '../components/DynamicBalls'
import bottle from '/images/bottle.png'
import '../src/brendxy.css'
const Brendxy = () =>{

    const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };
    
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
return (    
            <div className="section" style = {{backgroundImage:'url(../images/bg3.png)'}}>
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
                            <img  src='../src/btn1.png' style={{ width:250, height: 100 }} />
                        </button>
                        {isModalOpen && <Modal onClose={closeModal} />}
                            
                        </div>
                        
                    </div>
                    
                    </div>
                    
                
                
                
            </div>
        )


    }
export default Brendxy

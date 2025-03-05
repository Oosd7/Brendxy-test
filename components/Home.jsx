import React from "react";
import '../src/home.css';
import DynamicBalls from "./DynamicBalls";
import StaticObjects from "./StaticObjects";
import layer5 from '../images/layer-5.png';
import layer8 from '../images/layer-8.png';
import bakti1 from '../images/bakti_1.png';
import layer4 from '../images/layer-4.png';
import layer7 from '../images/layer-7.png';
import sperm1 from '../images/pink_sperm_1.png';
import layer4copy2 from '../images/layer-4_copy2.png';
import sperm2 from '../images/pink_sperm.png';
import layer4copy from '../images/layer-4_copy.png';
import button1 from '../src/btn.png'
  
const Home = ({goToSecondSlide}) => {
    const balls = [
        { id: 1, top: '9%', left: '68%',backgroundImage: `url(${layer5})`,width: 125, height: 114,animate:{x:[0,50,0],y:[0,10,0]},zIndex:1,scaleVar:'--scale' },
        { id: 2, top: '25%', left: '75%',backgroundImage:`url(${layer8})`,width: 221, height: 227,animate:{x:[0,-70,0],y:[0,-50,0],rotate:-30},zIndex:100,scaleVar:'--scale'},
        { id: 3, top: '68%', left: '6%',backgroundImage:`url(${bakti1})`,width: 146, height: 142,animate:{x:[0,50,0],y:[0,70,0]},zIndex:1,scaleVar:'--scale'},
        { id: 4, top: '85%', left: '50%',backgroundImage:`url(${layer4})`,width: 455, height: 253,animate:{x:[0,-30,0],y:[0,-30,0]},zIndex:1,scaleVar:'--scale'},
      ];
      const statics = [ 
        { id: 'obj1', top: '10%', left: '-7%', backgroundImage:`url(${layer7})`,width:251,height:231,scaleVar:'--scale' },
        { id: 'obj2', top: '20%', left: '20%', backgroundImage:`url(${sperm1})`,width:1183,height:185,scaleVar:'--scale'},
        { id: 'obj3', top: '2%', left: '87%',backgroundImage:`url(${layer4copy2})`,width:142,height:147,scaleVar:'--scale'},
        { id: 'obj4', top: '75%', left: '-10%',backgroundImage:`url(${sperm2})`,width:559,height:350,scaleVar:'--scale' },
        { id: 'obj5', top: '85%', left: '35%',backgroundImage:`url(${layer4copy})`,width:169,height:155,scaleVar:'--scale'},
      ];
      
    return (    
        <div className="section">
            {balls.map((ball) => (
                <DynamicBalls 
                key={ball.id} 
                {...ball}
                />
            ))}
            {statics.map((obj) => (
                <StaticObjects key={obj.id} {...obj} />
            ))}

                <div className="title">
                <p className="subtitle">Привет,</p>
                    <div className="title__spans">  
                        <span>Это <strong>не</strong></span>
                        <span>Коммерческое</span>
                        <div className="title__button">
                            <span>Задание</span>
                            <button onClick={goToSecondSlide} 
                            style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
                                <img  src={button1} style={{ width:350, height: 80 }} />
                            </button>
                        
                        </div>
                        
                    </div>
                </div> 
        </div>
    )
}


export default Home
import React from "react";

const StaticObjects = ({ top, left,backgroundImage,width,height,scaleVar}) => {
    return (
      <div
        className="static-object"
        style={{  top, 
                  left,
                  backgroundImage,
                  width,
                  height,
                  transform: `scale(var(${scaleVar}))`
              }}
      ></div>
    );
  };

export default StaticObjects
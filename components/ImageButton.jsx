import React from "react";
import Modal from "./Modal";

const ImageButton = ({ imageSrc,altText, onClick, }) => {
  return (
    <button onClick={onClick} style={{ border: 'none', background: 'none', cursor: 'pointer'}}>
      <img src={imageSrc} alt={altText} style={{ width:300, height: 100 }} />
    </button>
  );
};

export default ImageButton;
import React from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Overlay from "../../assets/img/overlay.png"

const PopUp = () => {
  return (
    <Popup trigger={<button> Trigger</button>} position="right center">
      <div className="popUp">
      <img src={Overlay} alt="" className="absolute inset-0" />
      </div>
    </Popup>
  );
};

export default PopUp;

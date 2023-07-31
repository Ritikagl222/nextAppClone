import React, { MouseEventHandler } from "react";
interface ButtonProps {
  buttonText: string;
  onClick: any;
  outlined?:boolean;
  fullwidth?:boolean;
}

const CommonButton = ({ buttonText, onClick =()=>{},outlined=false,fullwidth=false}: ButtonProps) => {
  return (
    <button
    style={{width:fullwidth?'100%':100}}
    //   onClick={onClick}
      className={outlined?` border border-black rounded-3xl p-3 text-xs text-black bg-white hover:bg-buttonHover hover:text-white  md:text-xs`:`rounded-3xl p-3 text-xs text-white bg-blackGrey hover:bg-buttonHover mt-4 md:text-xs`}
    >
      {buttonText}
    </button>
  );
};

export default CommonButton;

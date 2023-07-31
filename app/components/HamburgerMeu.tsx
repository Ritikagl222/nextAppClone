import { Typography } from "@mui/material";
import React from "react";
import CommonButton from "./comon/Button";

const HamburgerMenu = () => {
  const DataMap = [
    { title: "Work" },
    { title: "Service" },
    { title: "About" },
    { title: "Jobs" },
    { title: "Contact" },
  ];
  return (
    <div className="flex-col bg-black item-between justify-between p-10">
        <div className="flex-col w-full item:center justify-center">
          <ul className="text-white" style={{ fontSize: 14 }}>
            {DataMap?.map((elem: any, index: any) => {
              return (
                <li className="ml-0 m-6 " key={index}>
                  {elem?.title}
                </li>
              );
            })}
          </ul>
        
      </div>
      <CommonButton outlined fullwidth buttonText="More Template" onClick={() => {}} />
    </div>
  );
};

export default HamburgerMenu;

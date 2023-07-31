import { Typography } from "@mui/material";
import React from "react";
import CommonButton from "./comon/Button";

const PageSection = () => {
  const pageDataMap = {
    Pages: [
      { title: "Home" },
      { title: "Service" },
      { title: "About" },
      { title: "Jobs" },
      { title: "Contact" },
    ],
    CMS: [
      { title: "Home" },
      { title: "Service" },
      { title: "About" },
      { title: "Jobs" },
      { title: "Contact" },
    ],
    Utilty: [
      { title: "Home" },
      { title: "Service" },
      { title: "About" },
      { title: "Jobs" },
      { title: "Contact" },
    ],
    Social: [
      { title: "Instagram" },
      { title: "Twitter" },
      { title: "Linked In" },
      { title: "Behance" },
      { title: "Dribble" },
    ],
  };
  return (
    <div className="flex-col bg-black item-between justify-between p-10">
    <div className="flex item-center justify-between">
      <div className="flex-col item:start justify-center">
        <Typography
          color="white"
          style={{ textAlign: "left", borderBottom: "1px solid white" }}
          variant="body1"
        >
          Pages
        </Typography>
        <ul className="text-white" style={{ fontSize: 14 }}>
          {pageDataMap["Pages"]?.map((elem: any, index: any) => {
            return <li className="ml-0 m-6" key={index}>{elem?.title}</li>;
          })}
        </ul>
      </div>
      <div className="flex-col item:between justify-center">
        <Typography
          style={{ textAlign: "left", borderBottom: "1px solid white" }}
          color="white"
          variant="body1"
        >
          CMS
        </Typography>
        <ul className="text-white" style={{ fontSize: 14 }}>
          {pageDataMap["CMS"]?.map((elem: any, index: any) => {
            return <li className="ml-0 m-6"  key={index}>{elem?.title}</li>;
          })}
        </ul>
      </div>
      <div className="flex-col item:between justify-center">
        <Typography
          style={{ textAlign: "left", borderBottom: "1px solid white" }}
          color="white"
          variant="body1"
        >
          Utility
        </Typography>
        <ul className="text-white" style={{ fontSize: 14 }}>
          {pageDataMap["Utilty"]?.map((elem: any, index: any) => {
            return <li  className="ml-0 m-6"  key={index}>{elem?.title}</li>;
          })}
        </ul>
      </div>
      <div className="flex-col item:between justify-center">
        <Typography
          style={{ textAlign: "left", borderBottom: "1px solid white" }}
          color="white"
          variant="body1"
        >
          Social
        </Typography>
        <ul className="text-white" style={{ fontSize: 14 }}>
          {pageDataMap["Social"]?.map((elem: any, index: any) => {
            return <li  className="ml-0 m-6"  key={index}>{elem?.title}</li>;
          })}
        </ul>
      </div>
    </div>
    <CommonButton buttonText="More Template" onClick={()=>{}}/>
    </div>
  );
};

export default PageSection;

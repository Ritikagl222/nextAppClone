import { Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import CommonButton from "./comon/Button";
import  style from './components.module.css'

const WorkComponent = () => {
  const workMap = [
    {
      imageSrc: "/work/image1.webp",
      linkText: "Invision Studio",
      buttonText: "Marketing",
    },
    {
      imageSrc: "/work/image2.webp",
      linkText: "Square Media",
      buttonText: "Branding",
    },
  ];
  const workMap2 = [
    {
      imageSrc: "/work/image3.webp",
      linkText: "Vision Design",
      buttonText: "Social Media",
    },
    {
      imageSrc: "/work/image4.webp",
      linkText: "Design Bros",
      buttonText: "Branding",
    },
  ];
  return (
    <div className="flex-col w-full items-between justify-between">
      <div className="flex-col w-full items-between justify-between">
        <div className="flex flex-col w-full items-between justify-between md:flex-row" >
          {workMap?.map((elem: any, index: number) => {
            return (
              <div
                style={{overflow:'hidden' }}
                className={` flex-col w-full items-between justify-between m-2 `}
                key={index}
              >
                <Image
                  src={elem?.imageSrc}
                  alt=""
                className={`${style.workImage} dark:invert w-full`}

                  width={500}
                  height={100}
                  priority
                />
                <div className="flex w-full items-center justify-between p-1">
                <Typography className="mb-5 mt-4 font-light text-xl">
               {elem?.linkText}</Typography>
                  <CommonButton
                  outlined
                    onClick={() => {}}
                    buttonText={elem?.buttonText}
                  />
                </div>
              </div>
            );
          })}
        </div>

        <div className="flex flex-col w-full items-between justify-between md:flex-row ">
          {workMap2?.map((elem: any, index: number) => {
            return (
              <div
              style={{overflow:'hidden' }}
                className="flex-col w-full items-between justify-between m-2"
                key={index}
              >
                <Image
                  src={elem?.imageSrc}
                  alt=""
                  className={`${style.workImage} dark:invert w-full`}
                  width={500}
                  height={100}
                  priority
                />
                <div className="flex w-full items-center justify-between p-1">
                <Typography className="mb-5 mt-4 font-light text-xl">
               {elem?.linkText}</Typography>
                  <CommonButton
                  outlined
                    onClick={() => {}}
                    buttonText={elem?.buttonText}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WorkComponent;

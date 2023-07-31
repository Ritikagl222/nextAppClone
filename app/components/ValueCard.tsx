import { Typography } from "@mui/material";
import React from "react";
import CommonLink from "./comon/Link";
import CommonButton from "./comon/Button";
import useMediaQuery from '@mui/material/useMediaQuery';
const ValueCard = () => {
  interface Card {
    title: string;
    content?: string;
    footer: string;
    isButton?: boolean;
    bg?: string;
  }

  const cardMap: Array<Card> = [
    {
      title: "SERVICES",
      content: "Our Approach to Branding",
      footer:"About",
      isButton: true,
      bg: "#f8f8f8",
    },
    {
      title: "HELPING BRANDS STAND OUT",
      footer: "Bold Moves Big Impact.",
      bg: "#fffae7",
    },
    {
      title: "HELPING BRANDS STAND OUT",
      footer: "Bold Moves Big Impact.",
      bg: "#f8f8f8",
    },
    {
      title: "HELPING BRANDS STAND OUT",
      footer: "Bold Moves Big Impact.",
      bg: "#fffae7",
    },
    {
      title: "HELPING BRANDS STAND OUT",
      footer: "Bold Moves Big Impact.",
      bg: "#f8f8f8",
    },
    {
      title: "HELPING BRANDS STAND OUT",
      footer: "Bold Moves Big Impact.",
      bg: "#fffae7",
    },
    
  ];
const md=useMediaQuery(('min-width: 768px'))
  return (
    <div className="flex  w-full items-between justify-between md:flex-row  " style={{flexWrap:'wrap'}}>
      {cardMap?.map((card: Card, index: number) => {
        return (
          <div
            className=" items-between basis-full justify-between bg-grey p-5 m-4 md:basis-3/12"
            style={{ background: card?.bg?card?.bg:'transparent',height:300,flexDirection:'column' }}
            key={index}
          >
            <Typography variant="caption">{card?.title}</Typography>
            <Typography variant="h6" className="mb-5 mt-4">
              {card?.content}
            </Typography>

            {card?.isButton ? (
              <CommonButton onClick={() => {}} buttonText={card?.footer} />
            ) : (
              <Typography variant="body1" className="">
                {card?.footer}
              </Typography>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default ValueCard;

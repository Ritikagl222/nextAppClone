import { Typography } from "@mui/material";
import React from "react";
import CommonLink from "./comon/Link";


const CardSection = () => {
  interface Card {
    title: string;
    content: string;
    linktext: string;
  }

  const cardMap: Array<Card> = [
    {
      title: "Brand Strategy",
      content:
        "We help businesses define their unique brand message and branding positioning.",
      linktext: "About Strategy",
    },
    {
      title: "Visual Identity",
      content:
        "We create visual elements such as logos, packaging, and marketing materials for your brand.",
      linktext: "About Identity",
    },
    {
      title: "Digital Marketing",
      content:
        "We help businesses to promote their brand online and create engaging digital experiences",
      linktext: "About Marketing",
    },
    {
      title: "Brand Manage­ment",
      content:
        "We help businesses to implement their brand across all touchpoints and ensure consistency.",
      linktext: "About Management",
    },
  ];

  return (
    <div className="flex flex-col w-full items-between justify-between md:flex md:flex-row">
      {cardMap?.map((card: Card, index: number) => {
        return (
          <div style={{display:'flex',flexDirection:'column',justifyContent:'space-around',alignItems:'flex-start',height:300}}
           className="flex flex-col w-full items-center justify-around bg-grey p-5 mt-4 mb-4 md:w-3/12" key={index}>
            <Typography  className="text-xl font-light md:text-3xl">
              {card?.title}
            </Typography>
            <Typography  className="text-lg font-extralight md:text-lg">
              {card?.content}
            </Typography>
            <div>
                <CommonLink href={''} linkText={card?.linktext} />
                </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardSection;

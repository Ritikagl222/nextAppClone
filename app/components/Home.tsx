import { Button, Typography } from "@mui/material";
import React, { useState } from "react";
import CommonButton from "./comon/Button";
import CardSection from "./CardSection";
import WorkComponent from "./WorkComponent";
import ValueCard from "./ValueCard";
import NavBar from "./NavBar";
import PageSection from "./PageSection";
// import AnimatedSection from "./AnimatedSection";
import HamburgerMenu from "./HamburgerMeu";

const Home = () => {
  const [showPageSection, setShowPageSection] = useState<boolean>(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState<boolean>(false);
  return (
    <div className="container bg-white p-10 ">
      <NavBar setShowPageSection={setShowPageSection} setShowHamburgerMenu={setShowHamburgerMenu} />
      <>
        {showPageSection ? (
          <PageSection />
        ) : showHamburgerMenu ? (
          <HamburgerMenu/>
        ) : (
          <div className="mt-20 mb-20">
            <Typography className="text-3xl font-light md:text-8xl">
              Building Brands,One Success Story at a Time
            </Typography>
            <Typography className="mb-5 mt-4 font-light text-xl">
              Create a Brand That Resonates: We Can Help You Define and
              Communicate Your Unique Message.
            </Typography>
            <CommonButton buttonText="Our Services" onClick={() => {}} />
          </div>
        )}
      </>
      {/* <AnimatedSection /> */}
      <CardSection />
      <WorkComponent />
      <ValueCard />
    </div>
  );
};

export default Home;

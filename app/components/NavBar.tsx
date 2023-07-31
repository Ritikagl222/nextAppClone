import React, { useState } from "react";
import CommonLink from "./comon/Link";
import { useMediaQuery } from "react-responsive";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

interface NavBarProps {
  setShowPageSection: Function;
  setShowHamburgerMenu: Function;
}
interface navMapProps {
  title: string;
}
const NavBar = ({ setShowPageSection, setShowHamburgerMenu }: NavBarProps) => {
  const [menuOpen, setMenuOpen] = useState(true);
  const navMap: Array<navMapProps> = [
    { title: "Work" },
    { title: "Service" },
    { title: "About" },
    { title: "Blog" },
    { title: "Pages" },
    { title: "Cart" },
  ];
  const onPageHover = (title: string) => {
    if (title == "Pages") setShowPageSection(true);
  };
  const onPageHoverOut = (title: string) => {
    if (title == "Pages") setShowPageSection(false);
  };
  const MenuIconClick = () => {
    setShowHamburgerMenu(true);
    setMenuOpen(false)
  };

  const md = useMediaQuery({ query: "(min-width: 768px)" });
  console.log("md", md);

  return (
    <div
      className="flex w-full items-center justify-between"
      style={{ height: "20%", borderBottom: "1px solid grey" }}
    >
      <div
        className="flex w-full items-center justify-between"
        style={{ width: "fit-content" }}
      >
        <h2>Brand Name</h2>

        <div
          className="rounded-3xl pl-3 pr-3 text-black bg-orange ml-2"
          style={{ fontSize: 12 }}
        >
          We Are Hiring
        </div>
      </div>
      <>
        {md ? (
          <div>
            <ul className="flex w-full items-center justify-between">
              {navMap?.map((elem: any, index: number) => {
                return (
                  <li className="m-3" key={index}>
                    <CommonLink
                      onMouseEnter={() => onPageHover(elem?.title)}
                      onMouseLeave={() => onPageHoverOut(elem?.title)}
                      linkText={elem?.title}
                      href=""
                    />
                  </li>
                );
              })}
            </ul>
          </div>
        ) : menuOpen ? (
          <MenuIcon onClick={MenuIconClick} />
        ) : (
          <CloseIcon
            onClick={() => {
              setMenuOpen(true);
              setShowHamburgerMenu(false);
            }}
          />
        )}
      </>
    </div>
  );
};

export default NavBar;

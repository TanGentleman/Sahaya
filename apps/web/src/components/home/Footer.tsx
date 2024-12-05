import React from "react";
import Logo from "../common/Logo";
import Menu from "../common/Menu";
const menuItems = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About Us",
    url: "#about",
  },
  {
    title: "Get Started",
    url: "/notes",
  },
  {
    title: "Events",
    url: "/events",
  },
];
export interface FooterProps {
  slogan: string;
  description: string;
  copyrightNotice: string;
}

const Footer: React.FC<FooterProps> = ({
  slogan,
  description,
  copyrightNotice,
}) => {
  return (
    <>
      <div className="container hidden sm:block py-12">
        <div className="flex flex-wrap md:flex-nowrap justify-between items-center pb-6">
          <Logo />
          <Menu menuItems={menuItems} />
        </div>
        <div className="pt-8 border-t-[#929292] border-t border-solid">
          <h3 className="text-gray-900 text-xl not-italic font-semibold leading-[30px] font-montserrat pb-2">
            {slogan}
          </h3>
          <div className="flex justify-between">
            <p className="text-gray-600 font-montserrat text-base not-italic font-normal leading-6">
              {description}
            </p>
            <p className="text-gray-600 font-inter text-base not-italic font-normal leading-6">
              {copyrightNotice} 
              {/* Icons by Icons8. Powered by <a href="https://convex.dev/templates">Convex</a>. */}
            </p>
          </div>
        </div>
      </div>

      <div className="container sm:hidden pt-7 pl-6 pr-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col gap-6">
            <Logo />
            <h3 className="text-[#101828] text-base not-italic font-semibold leading-[18px] font-montserrat">
              {slogan}
            </h3>
            <p className="text-[#101828] font-montserrat text-base not-italic font-light leading-[18px]">
              {description}
            </p>
          </div>
          <div className="min-w-[100px]">
            <Menu menuItems={menuItems} />
          </div>
        </div>
        <p className="text-[#667085] font-inter text-center text-base not-italic font-light leading-[18px] py-11">
          {copyrightNotice} <br />
          <span className="mt-1"> Icons by Icons8. Powered by <a href="https://convex.dev/templates">Convex</a>.</span>
        </p>
      </div>
    </>
  );
};
export default Footer;

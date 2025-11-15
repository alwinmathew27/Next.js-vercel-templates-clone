"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../../public/images/Logo vercel.png";
import DropdownLink from "./DropdownLink";
import Navitems from "./Navitems";
import CommonBtn from "../general/CommonBtn";
const Header = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isSolutionsDropdownOpen, setIsSolutionsDropdownOpen] = useState(false);
  const [isResourcesDropdownOpen, setIsResourcesDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleProductsDropdown = () => {
    setIsProductsDropdownOpen(!isProductsDropdownOpen);
    setIsSolutionsDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };
  const toggleSolutionsDropdown = () => {
    setIsSolutionsDropdownOpen(!isSolutionsDropdownOpen);
    setIsProductsDropdownOpen(false);
    setIsResourcesDropdownOpen(false);
  };
  const toggleResourcesDropdown = () => {
    setIsResourcesDropdownOpen(!isResourcesDropdownOpen);
    setIsProductsDropdownOpen(false);
    setIsSolutionsDropdownOpen(false);
  };
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  return (
    <header className="wrapper bg-white w-[100%]">
      {/* Desktop Header */}
      <div className="nav-bar flex py-4 justify-between items-center w-[100%]">
        <div className="nav-left flex justify-between ">
          <div className="w-[100px] h-[22px] mr-4">
            <h1 className="text-black">
              <Link href="/">
                <Image src={Logo} alt="Logo" className="w-full" />
              </Link>
            </h1>
          </div>
          <nav className="flex space-x-6 text-[14px]">
            {/* Products Dropdown */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={toggleProductsDropdown}
              >
                Products
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isProductsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isProductsDropdownOpen && (
                <div className="absolute z-10 mt-4 p-8 bg-white border border-gray-200 rounded-lg shadow-lg flex">
                  <div>
                    <h3 className="px-4 py-2  font-semibold">DX Platform</h3>
                    <Link
                      href="/previews"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Preview
                    </Link>
                    <DropdownLink text="AI"></DropdownLink>
                  </div>
                  <div>
                    <h3 className="px-4 py-2 font-semibold">
                      Managed Infrastructure
                    </h3>
                    <DropdownLink text="Rendering"></DropdownLink>
                    <DropdownLink text="Observability"></DropdownLink>
                    <DropdownLink text=" Security"></DropdownLink>
                  </div>
                  <div>
                    <h3 className="px-4 py-2 font-semibold">Open Source</h3>
                    <DropdownLink text="Next.js"></DropdownLink>
                    <DropdownLink text="TurboPro"></DropdownLink>
                    <DropdownLink text="AI SDK"></DropdownLink>
                  </div>
                </div>
              )}
            </div>
            {/* Solutions Dropdown */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={toggleSolutionsDropdown}
              >
                Solutions
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isSolutionsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isSolutionsDropdownOpen && (
                <div className="absolute z-10 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg flex">
                  <div>
                    <h3 className="px-4 py-2 font-semibold">Use Cases</h3>
                    <DropdownLink text="AI Apps"></DropdownLink>
                    <DropdownLink text="Composable Commerce"></DropdownLink>
                    <DropdownLink text="Marketing Sites"></DropdownLink>
                  </div>
                  <div>
                    <h3 className="px-4 py-2 font-semibold">Users</h3>
                    <DropdownLink text="  Platform Engineers"></DropdownLink>
                    <DropdownLink text="  Disign Engineers"></DropdownLink>
                  </div>
                </div>
              )}
            </div>
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="text-gray-600 hover:text-gray-900 flex items-center"
                onClick={toggleResourcesDropdown}
              >
                Resources
                <svg
                  className={`ml-2 h-4 w-4 transition-transform ${
                    isResourcesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isResourcesDropdownOpen && (
                <div className="absolute z-10 mt-4 bg-white border border-gray-200 rounded-lg shadow-lg flex">
                  <div>
                    <h3 className="px-4 py-2 font-semibold">Tools</h3>
                    <DropdownLink text="Resource Center"></DropdownLink>
                    <DropdownLink text="Marketplace"></DropdownLink>
                    <DropdownLink text="Templates"></DropdownLink>
                  </div>
                  <div>
                    <h3 className="px-4 py-2 font-semibold">Company</h3>
                    <DropdownLink text="Customers"></DropdownLink>
                    <DropdownLink text="Blog"></DropdownLink>
                    <DropdownLink text="Changelog"></DropdownLink>
                  </div>
                </div>
              )}
            </div>
            <Navitems text="Enterprise" />
            <Navitems text="Docs" />
            <Navitems text="Pricing" />
          </nav>
        </div>

        <div className="flex space-x-4 text-[14px]">
          <CommonBtn
            text="Log in"
            className="font-medium"
            textColor="text-gray-500"
          />

          <CommonBtn
            text="Contact"
            padding="px-4 py-2"
            bgColor="bg-white"
            textColor="text-black"
            className="font-semibold hidden xl:block"
            hoverColor="hover:bg-gray-100"
            border="border border-gray-200"
          />
          <CommonBtn
            text="Sign Up"
            padding="px-4 py-2"
            bgColor="bg-black"
            textColor="text-white"
            hoverColor="hover:bg-black-100"
            className="font-semibold  "
          />
        </div>
      </div>
      {/* Mobile Header */}
      <div className="md:hidden">
        <div className="container mx-auto py-4 flex justify-between items-center">
          <div className="w-[100px] h-[22px]">
            <Link href="/">
              <Image src={Logo} alt="Logo" className="w-full" />
            </Link>
          </div>
          {/* Hamburger Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="z-50 relative w-10 h-10 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            <div className="block w-5 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? "rotate-45" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                aria-hidden="true"
                className={`block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out ${
                  isMobileMenuOpen ? "-rotate-45" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="fixed inset-0 z-40 bg-white overflow-y-auto">
              <div className="container mx-auto px-4 pt-14 pb-10">
                <nav className="flex flex-col space-y-6 text-[16px]">
                  <div className="space-y-4">
                    <button className="w-full text-center border border-gray-200 px-4 py-3 rounded-lg bg-black text-white font-semibold">
                      Sign Up
                    </button>
                    <button className="w-full text-center border border-gray-200 px-4 py-3 rounded-lg bg-white-800 text-black font-semibold">
                      Login
                    </button>
                  </div>

                  {/* Mobile Products Dropdown */}
                  <div className="relative">
                    <button
                      className="w-full text-left text-gray-600 hover:text-gray-900 flex justify-between items-center"
                      onClick={toggleProductsDropdown}
                    >
                      Products
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          isProductsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isProductsDropdownOpen && (
                      <div className="mt-4 space-y-4 pl-4">
                        <DropdownLink text="Preview" />
                        <DropdownLink text="AI" />
                        <DropdownLink text="Rendering" />
                        <DropdownLink text="Observability" />
                        <DropdownLink text="Security" />
                      </div>
                    )}
                  </div>
                  {/* Mobile Solutions Dropdown */}
                  <div className="relative">
                    <button
                      className="w-full text-left text-gray-600 hover:text-gray-900 flex justify-between items-center"
                      onClick={toggleSolutionsDropdown}
                    >
                      Solutions
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          isSolutionsDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isSolutionsDropdownOpen && (
                      <div className="mt-4 space-y-4 pl-4">
                        <DropdownLink text="AI Apps" />
                        <DropdownLink text="Composable Commerce" />
                        <DropdownLink text="Marketing Sites" />
                        <DropdownLink text="Platform Engineers" />
                        <DropdownLink text="Design Engineers" />
                        <DropdownLink text="Web Apps" />
                      </div>
                    )}
                  </div>
                  {/* Mobile Resources Dropdown */}
                  <div className="relative">
                    <button
                      className="w-full text-left text-gray-600 hover:text-gray-900 flex justify-between items-center"
                      onClick={toggleResourcesDropdown}
                    >
                      Resources
                      <svg
                        className={`h-5 w-5 transition-transform ${
                          isResourcesDropdownOpen ? "rotate-180" : ""
                        }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {isResourcesDropdownOpen && (
                      <div className="mt-4 space-y-4 pl-4">
                        <DropdownLink text="Resource Center" />
                        <DropdownLink text="Marketplace" />
                        <DropdownLink text="Templates" />
                        <DropdownLink text="Customers" />
                        <DropdownLink text="Blog" />
                        <DropdownLink text="Customers" />
                        <DropdownLink text="Changelog" />
                      </div>
                    )}
                  </div>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Enterprise
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Docs
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Pricing
                  </Link>
                  <Link href="#" className="text-gray-600 hover:text-gray-900">
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
export default Header;

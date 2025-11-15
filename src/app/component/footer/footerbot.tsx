import React from "react";
import Image from "next/image";
import Link from "next/link";
import ServicesTxt from "./ServicesTxt";
import FooterLogo from "../../../../public/images/footerVercelIcon.png";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footerbot = () => {
  return (
    <footer className="wrapper bg-white text-gray-800 py-16 ">
      <div className="container mx-auto flex justify-between  flex-wrap gap-10">
        <div className="space-y-2">
          <h4 className="font-medium">Products</h4>
          <ul className="space-y-1">
            <li>
              <ServicesTxt text="AI" />
            </li>
            <li>
              <ServicesTxt text="Enterprise" />
            </li>
            <li>
              <ServicesTxt text="Next.js" />
            </li>
            <li>
              <ServicesTxt text="Observability" />
            </li>
            <li>
              <ServicesTxt text="Preview" />
            </li>
            <li>
              <ServicesTxt text="Rendering" />
            </li>
            <li>
              <ServicesTxt text="Security" />
            </li>
            <li>
              <ServicesTxt text="Turbo" />
            </li>
            <li>
              <ServicesTxt text="Vo" />
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Resources</h4>
          <ul className="space-y-1">
            <li>
              <ServicesTxt text="Community" />
            </li>
            <li>
              
              <ServicesTxt text="Docs"/>
            </li>
            <li>
              
              <ServicesTxt text="Experts"/>
            </li>
            <li>
             
              <ServicesTxt text="Guide"/>
            </li>
            <li>
              
              <ServicesTxt text="Help"/>
            </li>
            <li>
             
              <ServicesTxt text="Integration"/>
            </li>
            <li>
              
              <ServicesTxt text="Pricing"/>
            </li>
            <li>
            
              <ServicesTxt text="Resources"/>
            </li>
            <li>
             
              <ServicesTxt text="Templates"/>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Company</h4>
          <ul className="space-y-1">
            <li>
              
              <ServicesTxt text="About"/>
            </li>
            <li>
            
              <ServicesTxt text="Blog"/>
            </li>
            <li>
              
              <ServicesTxt text="Careers"/>
            </li>
            <li>
             
              <ServicesTxt text="Changelog"/>
            </li>
            <li>
           
              <ServicesTxt text="Contact"/>
            </li>
            <li>
            
              <ServicesTxt text="Customers"/>
            </li>
            <li>
              
              <ServicesTxt text="Partners"/>
            </li>
            <li>
              
              <ServicesTxt text="Privacy"/>
            </li>
            <li>
              <ServicesTxt text="Legal"/>
            </li>
          </ul>
        </div>
        <div className="flex flex-col space-y-2 items-start">
          <h4 className="font-medium">Social</h4>

          <a
            href="https://github.com"
            className="hover:text-gray-700 flex items-center space-x-1"
          >
            <FaGithub size={15} />
            <span>GitHub</span>
          </a>
          <a
            href="https://linkedin.com"
            className="hover:text-gray-700 flex items-center space-x-1"
          >
            <FaLinkedin size={15} />
            <span>LinkedIn</span>
          </a>
          <a
            href="https://twitter.com"
            className="hover:text-gray-700 flex items-center space-x-1"
          >
            <FaTwitter size={15} />
            <span>Twitter</span>
          </a>
          <a
            href="https://youtube.com"
            className="hover:text-gray-700 flex items-center space-x-1"
          >
            <FaYoutube size={15} />
            <span>YouTube</span>
          </a>
        </div>
        <div className="mr-20 hidden lg:block ">
          <Link href="/">
            <Image src={FooterLogo} alt="Logo" className="w-full" />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footerbot;

import React from "react";
import Image from "next/image";
import Link from "next/link";
import FooterLogo from "../../../../public/images/footerVercelIcon.png";
import { FaGithub, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";

const Footerbot = () => {
  return (
    <footer className="wrapper bg-white text-gray-800 py-16 ">
      <div className="container mx-auto flex justify-between flex-wrap gap-10">
        {/* <nav className="flex justify-between"> */}
        <div className="space-y-2">
          <h4 className="font-medium">Products</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/ai">
                <span className="hover:text-gray-600">AI</span>
              </Link>
            </li>
            <li>
              <Link href="/enterprise">
                <span className="hover:text-gray-600">Enterprise</span>
              </Link>
            </li>
            <li>
              <Link href="/next-js">
                <span className="hover:text-gray-600">Next.js</span>
              </Link>
            </li>
            <li>
              <Link href="/observability">
                <span className="hover:text-gray-600">Observability</span>
              </Link>
            </li>
            <li>
              <Link href="/previews">
                <span className="hover:text-gray-600">Previews</span>
              </Link>
            </li>
            <li>
              <Link href="/rendering">
                <span className="hover:text-gray-600">Rendering</span>
              </Link>
            </li>
            <li>
              <Link href="/security">
                <span className="hover:text-gray-600">Security</span>
              </Link>
            </li>
            <li>
              <Link href="/turbo">
                <span className="hover:text-gray-600">Turbo</span>
              </Link>
            </li>
            <li>
              <Link href="/v0">
                <span className="hover:text-gray-600">v0</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Resources</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/community">
                <span className="hover:text-gray-600">Community</span>
              </Link>
            </li>
            <li>
              <Link href="/docs">
                <span className="hover:text-gray-600">Docs</span>
              </Link>
            </li>
            <li>
              <Link href="/experts">
                <span className="hover:text-gray-600">Experts</span>
              </Link>
            </li>
            <li>
              <Link href="/guides">
                <span className="hover:text-gray-600">Guides</span>
              </Link>
            </li>
            <li>
              <Link href="/help">
                <span className="hover:text-gray-600">Help</span>
              </Link>
            </li>
            <li>
              <Link href="/integrations">
                <span className="hover:text-gray-600">Integrations</span>
              </Link>
            </li>
            <li>
              <Link href="/pricing">
                <span className="hover:text-gray-600">Pricing</span>
              </Link>
            </li>
            <li>
              <Link href="/resources">
                <span className="hover:text-gray-600">Resources</span>
              </Link>
            </li>
            <li>
              <Link href="/templates">
                <span className="hover:text-gray-600">Templates</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="space-y-2">
          <h4 className="font-medium">Company</h4>
          <ul className="space-y-1">
            <li>
              <Link href="/about">
                <span className="hover:text-gray-600">About</span>
              </Link>
            </li>
            <li>
              <Link href="/blog">
                <span className="hover:text-gray-600">Blog</span>
              </Link>
            </li>
            <li>
              <Link href="/careers">
                <span className="hover:text-gray-600">Careers</span>
              </Link>
            </li>
            <li>
              <Link href="/changelog">
                <span className="hover:text-gray-600">Changelog</span>
              </Link>
            </li>
            <li>
              <Link href="/contact">
                <span className="hover:text-gray-600">Contact Us</span>
              </Link>
            </li>
            <li>
              <Link href="/customers">
                <span className="hover:text-gray-600">Customers</span>
              </Link>
            </li>
            <li>
              <Link href="/partners">
                <span className="hover:text-gray-600">Partners</span>
              </Link>
            </li>
            <li>
              <Link href="/privacy">
                <span className="hover:text-gray-600">Privacy Policy</span>
              </Link>
            </li>
            <li>
              <Link href="/legal">
                <span className="hover:text-gray-600">Legal</span>
              </Link>
            </li>
          </ul>
        </div>
        {/* <div className="flex-row space-x-2 align-baseline items-center">
          <h4 className="font-medium">Scocial</h4>

          <a href="https://github.com" className="hover:text-gray-700 flex ">
            <FaGithub size={15} />
            GitHub
          </a>
          <a href="https://linkedin.com" className="hover:text-gray-700 ">
            <FaLinkedin size={15} /> linkedin
          </a>
          <a href="https://twitter.com" className="hover:text-gray-700">
            <FaTwitter size={15} /> twitter
          </a>
          <a href="https://youtube.com" className="hover:text-gray-700">
            <FaYoutube size={15} /> youtube
          </a>
        </div> */}
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
        <div className="mr-20">
          <Link href="/">
            <Image src={FooterLogo} alt="Logo" className="w-full" />
          </Link>
        </div>

        {/* </nav> */}
      </div>
    </footer>
  );
};

export default Footerbot;

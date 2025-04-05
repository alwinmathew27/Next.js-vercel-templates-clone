import React from "react";
import Link from "next/link";

const Navitems = ({ text }: { text: string }) => {
  return (
    <div>
      <Link
        href="#"
        className="text-gray-600 hidden hover:text-gray-900 lg:inline-block"
      >
        {text}
      </Link>
    </div>
  );
};

export default Navitems;

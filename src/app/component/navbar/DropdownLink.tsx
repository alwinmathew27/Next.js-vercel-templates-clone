import React from "react";
import Link from "next/link";

const DropdownLink = ({ text }: { text: string }) => {
  return (
    <div>
      <Link href="/previews" className="block px-4 py-2 hover:bg-gray-100">
        {text}
      </Link>
    </div>
  );
};

export default DropdownLink;

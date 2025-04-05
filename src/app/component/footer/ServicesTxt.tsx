import React from "react";
import Link from "next/link";

const ServicesTxt = ({ text }: { text: string }) => {
  return (
    <div>
      <Link href="#" className="hover:text-gray-600">
        {text}
      </Link>
    </div>
  );
};

export default ServicesTxt;

import React from "react";
import Spotlight from "../spotlight/page";
import Main_page from "../mainpage/main_page";
import Geistspace from "../../geist_spacer/geistspace";
export default function Homepage() {
  return (
    <>
      <Spotlight />
      <Main_page />
       <div className='wrapper'>
              <Geistspace/>
        </div>
    </>
  );
}

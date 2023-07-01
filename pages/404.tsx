import React from "react";
import Link from "next/link";

import stl from "./404.module.scss";

const PageNotFound = () => {
  return (
    <div className={stl.PNF}>
      <h1>
        404: <span>Page Not Found</span>
      </h1>
      <p>
        Oops! Looks like you've taken a wrong turn. This page seems to be lost
        in cyberspace. Don't worry, it happens to the best of us. Let's get you
        back on track.
      </p>
      <Link href="/">Go to Home</Link>
    </div>
  );
};

export default PageNotFound;

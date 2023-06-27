import React from "react";

import stl from "./URLPreview.module.scss";

interface Props {
  url: string;
}

const UrlPreview = ({ url }: Props) => {
  return (
    <div className={stl.urlPreview}>
      <iframe
        src={url}
        width="300px"
        height="300px"
        sandbox="allow-same-origin allow-scripts"
      />
    </div>
  );
};

export default UrlPreview;

import React, { useEffect } from "react";

import Icon from "assets/goto-link.svg";
import Tooltip from "components/tooltip";

import stl from "./ReaderRes.module.scss";

interface Props {
  data: string;
}

const ReaderRes = ({ data }: Props) => {
  const [showURL, setShowURL] = React.useState(false);
  const [showTooltip, setShowTooltip] = React.useState(false);

  const isURL = (str: string) => {
    const urlPattern = /^(https?:\/\/)?([\w.-]+)\.([a-z]{2,})(\/.*)?$/i;
    return urlPattern.test(str);
  };

  const modifiedString = data.replace(/:(?!\s)/g, ": ");

  useEffect(() => {
    if (isURL(data)) {
      setShowURL(true);
    } else {
      setShowURL(false);
    }
  }, [data]);

  return (
    <div className={stl.result}>
      <h2>Result</h2>
      <div className={stl.data}>
        {showURL ? (
          <a
            href={data}
            className={stl.link}
            target="_blank"
            onMouseOver={() => setShowTooltip(true)}
            onMouseOut={() => setShowTooltip(false)}
          >
            {data}
            {<Icon />}
            <Tooltip
              isVisible={showTooltip}
              text="Open Link"
              left="27%"
              top="-160%"
              arrowPos="bottom"
            />
          </a>
        ) : (
          modifiedString
        )}
      </div>
    </div>
  );
};

ReaderRes.defaultProps = {
  data: "Ut reprehenderit deserunt laboris qui. Aute consequat est irure ipsum duis nisi. Nulla dolore deserunt ipsum pariatur consequat quis ut.",
};

export default ReaderRes;

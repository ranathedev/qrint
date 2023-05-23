import React, { useEffect } from "react";
import Image from "next/image";

import stl from "./Scanner.module.scss";

interface Props {
  file?: any;
  src?: string;
}

const Scanner = ({ file, src }: Props) => {
  const [isLoading, setIsLoading] = React.useState(true);

  useEffect(() => {
    isLoading && setTimeout(() => setIsLoading(false), 500);
  }, [isLoading]);

  return isLoading ? (
    <div>Loading...</div>
  ) : (
    <div className={stl.scanner}>
      <div className={stl.container}>
        <Image
          src={(file && URL.createObjectURL(file)) || (src && src)}
          width={330}
          height={340}
          alt="image"
        />
        <div className={stl.border}></div>
      </div>
      <div className={stl.text}>Scanning the Image...</div>
    </div>
  );
};

export default Scanner;
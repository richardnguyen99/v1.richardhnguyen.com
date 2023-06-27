import * as React from "react";
import { DotFillIcon } from "@primer/octicons-react";

const PageBreak: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-10 mt-16 pb-8">
      <DotFillIcon size={32} />
      <DotFillIcon size={32} />
      <DotFillIcon size={32} />
    </div>
  );
};

export default PageBreak;

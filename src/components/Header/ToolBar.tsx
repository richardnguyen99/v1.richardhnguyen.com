import * as React from "react";

const ToolBar: React.FC = () => {
  return (
    <div id="header-toolbar" className="flex items-center gap-4">
      <div>Github</div>
      <div>RSS</div>
      <div>Theme</div>
    </div>
  );
};

export default ToolBar;

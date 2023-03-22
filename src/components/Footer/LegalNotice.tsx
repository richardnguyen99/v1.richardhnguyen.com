import * as React from "react";
import { Link } from "gatsby";

const LegalNotice: React.FC = () => {
  return (
    <nav id="legal-links" aria-label="legal" className="flex justify-between">
      <span>© 2023 richardhnguyen.com. All Rights Reserved.</span>
      <div className="flex justify-start items-start">
        <Link className="hover:underline" to="/privacy">
          Privacy Notice
        </Link>
        <span className="px-3">·</span>
        <Link className="hover:underline" to="/terms">
          Terms of service
        </Link>
        <span className="px-3">·</span>
        <Link className="hover:underline" to="/cookies">
          Cookie preferences
        </Link>
      </div>
    </nav>
  );
};

export default LegalNotice;

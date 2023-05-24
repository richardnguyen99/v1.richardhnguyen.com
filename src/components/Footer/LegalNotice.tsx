import * as React from "react";
import { Link } from "gatsby";

const LegalNotice: React.FC = () => {
  return (
    <nav
      id="legal-links"
      aria-label="legal"
      className="block border-t pt-6 mt-6 border-zinc-700 lg:flex lg:justify-between lg:mt-0 lg:pt-0 lg:border-t-0"
    >
      <span>© 2023 richardhnguyen.com. All Rights Reserved.</span>
      <div className="flex justify-between mt-3 mb-3 lg:mt-0 lg:justify-start lg:items-start">
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

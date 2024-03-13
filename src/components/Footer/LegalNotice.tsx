import * as React from "react";
import clsx from "classnames";
import { Link } from "gatsby";

const LegalNotice: React.FC = () => {
  return (
    <nav
      id="legal-links"
      aria-label="legal"
      className={clsx({
        "block border-t pt-6 mt-6": true,
        "lg:flex lg:justify-between lg:mt-0 lg:pt-0": true,
        "border-zinc-700 lg:border-t-0": true,
      })}
    >
      <span>© 2023 richardhnguyen.com. All Rights Reserved.</span>
      <div
        className={clsx({
          "hidden md:flex justify-between mt-3 mb-3": true,
          "lg:mt-0 lg:justify-start lg:items-start": true,
        })}
      >
        <Link
          className="hover:underline text-xs md:text-sm lg:text-lg"
          to="/privacy"
        >
          Privacy Notice
        </Link>
        <span className="px-0.5 md:px-1 lg:px-3">·</span>
        <Link
          className="hover:underline text-xs md:text-sm lg:text-lg"
          to="/terms"
        >
          Terms of service
        </Link>
        <span className="px-0.5 md:px-1 lg:px-3">·</span>
        <Link
          className="hover:underline text-xs md:text-sm lg:text-lg"
          to="/cookies"
        >
          Cookie preferences
        </Link>
      </div>
    </nav>
  );
};

export default LegalNotice;

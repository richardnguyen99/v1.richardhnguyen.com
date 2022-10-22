/**
 * Runtime error pages for Gatsby application
 *
 * @author Richard Mguyen <richard@richardhnguyen.com>
 */

import * as React from "react";

const RuntimeError = () => {
  return (
    <>
      <h1>500: Internal Server Error</h1>
      <p>Oops. Something went wrong in the internal server.</p>
      <p>
        Please refresh this page or contact the owner if this error continues.
      </p>
    </>
  );
};

export default RuntimeError;

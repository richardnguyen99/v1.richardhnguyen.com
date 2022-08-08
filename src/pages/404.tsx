/**
 * A React component to display a Not Found page in Gatsby site.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import * as React from "react";

import Seo from "@components/SEO";

const NotFoundPage = () => (
  <>
    <Seo title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </>
);

export default NotFoundPage;

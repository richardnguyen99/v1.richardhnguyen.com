/**
 * Index file for grouping <Layout /> components.
 *
 * Layout components are shared frames between multiple pages.
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */
import PageLayout from "./PageLayout";
import RootLayout from "./RootLayout";

const exported = Object.assign("Layout", {
  Root: RootLayout,
  Page: PageLayout,
});

export default exported;

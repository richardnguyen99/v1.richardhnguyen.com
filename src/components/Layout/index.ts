/**
 * Index file for <Layout /> components
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

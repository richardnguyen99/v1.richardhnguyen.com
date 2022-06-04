/**
 * Type definition for <SEO /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

type Meta =
  | { name: string; content: any; property?: undefined }
  | { property: string; content: any; name?: undefined };

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

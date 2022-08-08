/**
 * Type definition for <SEO /> component
 *
 * @author Richard Nguyen <richard.ng0616@gmail.com>
 */

type Meta =
  | { name: string; content: string; property?: undefined }
  | { property: string; content: string; name?: undefined };

export interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Meta[];
  title: string;
}

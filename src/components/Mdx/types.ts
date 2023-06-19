export interface PreProps {
  children: {
    props: {
      children: string;
      className?: string;

      title?: string;
      showLineNumbers?: string;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
    type: string;
  };
}

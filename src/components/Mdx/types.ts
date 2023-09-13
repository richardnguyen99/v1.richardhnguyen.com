export interface PreProps {
  children: {
    props: {
      children: string;
      className?: string;

      title?: string;
      showLineNumbers?: string;
      showWindowBar?: string;
      tab?: number;

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      [key: string]: any;
    };
    type: string;
  };
}

import { Link } from "gatsby";
import * as React from "react";

interface ItemProps {
  name: string;
  type: "a" | "gatsby-link";
  href: string;
}

export interface FooterColumnProps {
  title: string;
  items: Array<ItemProps>;
}

type Props = React.PropsWithChildren<
  React.HTMLAttributes<HTMLDivElement> & FooterColumnProps
>;

const Column: React.FC<Props> = ({ title, items, ...rest }) => {
  const renderItem = (item: ItemProps) => {
    if (item.type === "a") {
      return (
        <a target="_blank" rel="noreferrer" href={item.href}>
          {item.name}
        </a>
      );
    }

    return <Link to={item.href}>{item.name}</Link>;
  };

  return (
    <div {...rest}>
      <h2 className="font-extrabold text-xl lg:text-2xl xl:text-3xl text-sky-400 dark:hover:text-sky-500 pb-6">
        {title}
      </h2>
      <ul className="flex items-center gap-6 md:block">
        {items.map((item, i) => (
          <li
            key={`footer-item-${i}`}
            className="font-medium opacity-40 hover:opacity-80 leading-tight mb-4 cursor-pointer dark:text-white"
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;

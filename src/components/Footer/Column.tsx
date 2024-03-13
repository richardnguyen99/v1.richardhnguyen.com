import * as React from "react";
import clsx from "classnames";
import { Link } from "gatsby";

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
      <h2
        className={clsx({
          "font-extrabold text-xl pb-6 lg:text-2xl xl:text-3xl": true,
          "text-sky-500 hover:text-sky-600": true,
          "dark:text-sky-400 dark:hover:text-sky-500": true,
        })}
      >
        {title}
      </h2>
      <ul className="flex items-center flex-wrap gap-6 md:block">
        {items.map((item, i) => (
          <li
            key={`footer-item-${i}`}
            className={clsx({
              "mb-4 cursor-pointer": true,
              "opacity-80 hover:opacity-100": true,
              "dark:opacity-40 dark:hover:opacity-80": true,
              "leading-tight font-medium dark:text-white": true,
            })}
          >
            {renderItem(item)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Column;

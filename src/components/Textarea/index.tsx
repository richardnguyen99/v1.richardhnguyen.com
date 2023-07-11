import * as React from "react";
import clsx from "classnames";

import type { TextareaProps } from "./type";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & TextareaProps;

const Textarea: React.FC<Props> = ({
  label,
  value,
  placeholder,
  onChange,
  ...rest
}) => {
  const id = React.useId();

  return (
    <div className="mt-8">
      <label
        className={clsx("block mb-2", {
          "text-lg": true,
        })}
        htmlFor={id}
      >
        {label}
      </label>
      <textarea
        id={id}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={clsx("", {
          "outline-none text-sm rounded-lg block w-full p-2.5 border ": true,
          "bg-gray-100 dark:bg-[rgb(20,29,31)]": true,
          "hover:bg-gray-200 dark:hover:bg-[rgb(25,34,36)]": true,
          "border-gray-300 dark:border-gray-600": true,
          "text-gray-900 dark:text-white": true,
          "dark:placeholder-gray-400 ": true,
          "focus:ring-sky-400 focus:border-sky-400": true,
          "dark:focus:ring-sky-500 dark:focus:border-sky-500": true,
        })}
        {...rest}
      />
    </div>
  );
};

export default Textarea;

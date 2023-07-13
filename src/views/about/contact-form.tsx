import * as React from "react";
import type {
  FC,
  FormHTMLAttributes,
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
} from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import clsx from "classnames";

type IFormData = {
  fullName: string;
  email: string;
  message: string;
};

// From RFC 5322
const rfcEmailRegex =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

const ContactForm: FC<
  PropsWithChildren<FormHTMLAttributes<HTMLFormElement>>
> = () => {
  const [loading, setLoading] = React.useState(false);
  const fullNameId = React.useId();
  const emailId = React.useId();
  const messageId = React.useId();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IFormData>();

  const submitHandler: SubmitHandler<IFormData> = (
    { fullName, email, message },
    e
  ) => {
    e.preventDefault();

    const msg = JSON.stringify({ fullName, email, message });

    setLoading(true);
    fetch("/api/contact", {
      method: "POST",
      body: msg,
      headers: {
        "Content-Type": "application/json",
        "Content-Length": msg.length.toString(),
      },
    })
      .then((res) => {
        console.log(res.headers);
        return res.json();
      })
      .then((body) => {
        console.log(body);
      })
      .catch((err) => {
        console.error(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(submitHandler)}>
      <div className={clsx("flex flex-col gap-8", {})}>
        <div>
          <Label htmlFor={fullNameId}>Full Name</Label>
          <Input
            id={fullNameId}
            type="text"
            placeholder="Your lovely name"
            {...register("fullName", {
              required: true,
            })}
          />
          {errors.fullName && (
            <p className="italic text-sm text-red-500 dark:text-red-400 mt-4">
              A person without name? It&apos; weird, you know?
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={emailId}>Email</Label>
          <Input
            id={emailId}
            type="text"
            placeholder="someone@example.com"
            {...register("email", { required: true, pattern: rfcEmailRegex })}
          />
          {errors.email && (
            <p className="italic text-sm text-red-500 dark:text-red-400 mt-4">
              You thought I wouldn&apos;t notice, didn&apos;t you? Please enter
              a valid email!
            </p>
          )}
        </div>

        <div>
          <Label htmlFor={messageId}>Message</Label>
          <textarea
            id={messageId}
            rows={10}
            placeholder="Hello, World!"
            className={clsx("", {
              "outline-none text-sm rounded-lg block w-full p-2.5 border ":
                true,
              "bg-gray-100 dark:bg-[rgb(20,29,31)]": true,
              "hover:bg-gray-200 dark:hover:bg-[rgb(25,34,36)]": true,
              "border-gray-300 dark:border-gray-600": true,
              "text-gray-900 dark:text-white": true,
              "dark:placeholder-gray-400 ": true,
              "focus:ring-sky-400 focus:border-sky-400": true,
              "dark:focus:ring-sky-500 dark:focus:border-sky-500": true,
            })}
            {...register("message", { required: true })}
          />
          {errors.message && (
            <p className="italic text-sm text-red-500 dark:text-red-400 mt-4">
              &quot;Hello, World!&quot;, maybe?
            </p>
          )}
        </div>
      </div>

      <p className="italic text-sm text-slate-500 dark:text-slate-600 mt-4">
        *Form is handled by Gatsby Function.
      </p>

      <button
        type="submit"
        className={clsx("relative w-full mt-8 rounded-[3rem]", {
          "flex items-center justify-center gap-4": true,
          "px-2 py-2": true,
          "bg-sky-500 dark:bg-sky-400": true,
          "text-white": true,
        })}
      >
        <div className="flex items-center min-h-[32px]">
          {loading ? <Loading /> : "Send"}
        </div>
      </button>
    </form>
  );
};

export default ContactForm;

const Label: FC<PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>> = ({
  className: _className,
  children,
  htmlFor,
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={clsx("block mb-2 ", {
        "text-lg": true,
      })}
      htmlFor={htmlFor}
    >
      {children}
    </label>
  );
};

const Loading: React.FC = () => {
  const Ball = () => (
    <div className="animate-loading block w-[10px] h-[10px] rounded-full bg-white" />
  );

  return (
    <div className="flex items-center gap-2 [&:nth-child(1)]:animation-delay-300 [&:nth-child(2)]:animation-delay-200 [&:nth-child(3)]:animation-100">
      <Ball />
      <Ball />
      <Ball />
    </div>
  );
};

const Input = React.forwardRef<
  HTMLInputElement,
  InputHTMLAttributes<HTMLInputElement>
>(({ className: _className, ...rest }, ref) => {
  return (
    <input
      ref={ref}
      {...rest}
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
    />
  );
});
Input.displayName = "InputRefComponent";

import * as React from "react";
import type {
  InputHTMLAttributes,
  LabelHTMLAttributes,
  PropsWithChildren,
} from "react";
import clsx from "clsx";
import { SubmitHandler, useForm } from "react-hook-form";

import BorderLink from "@components/Link/BorderLink";

// From RFC 5322
const rfcEmailRegex =
  // eslint-disable-next-line no-control-regex
  /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/g;

type IFormData = {
  fullName: string;
  email: string;
  message: string;
};

const ContactSection = () => {
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
    <section
      id="about-contact-section"
      className="px-6 md:mx-auto md:max-w-3xl md:px-10 lg:max-w-4xl xl:max-w-6xl min-h-[90vh] mt-32"
    >
      <h1 className="peer relative text-[5.75vw] font-black text-black dark:text-white">
        Convienced yet?
      </h1>
      <div className="relative w-4/12 h-2 dark:bg-slate-50 bg-[#0b1416]" />
      <div className="flex flex-col justify-between md:flex-row gap-16 mt-10 text-lg">
        <div className="w-full md:w-4/12">
          <p>
            Thanks for stopping! I&apos;m currently looking for a team that is
            solving interesting problems and challenges. If you think I&apos;m a
            good fit, please reach out to me
          </p>
          <p>&nbsp;</p>

          <div>
            I&apos;m also available on other platforms, so let&apos; talk!
          </div>
          <div className="flex items-center gap-6 mt-8">
            <BorderLink
              native
              href="https://www.linkedin.com/in/richardmhnguyen/"
            >
              LINKEDIN
            </BorderLink>
            <BorderLink native href="https://twitter.com/richardmhnguyen">
              TWITTER
            </BorderLink>
          </div>
        </div>
        <div className="w-full md:w-6/12">
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
                  <p className="italic text-sm text-red-500 dark:text-red-400 mt-2">
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
                  {...register("email", {
                    required: true,
                    pattern: rfcEmailRegex,
                  })}
                />
                {errors.email && (
                  <p className="italic text-sm text-red-500 dark:text-red-400 mt-2">
                    You thought I wouldn&apos;t notice, didn&apos;t you? Please
                    enter a valid email!
                  </p>
                )}
              </div>

              <div>
                <Label htmlFor={messageId}>Message</Label>
                <textarea
                  id={messageId}
                  rows={10}
                  placeholder="Hello, World!"
                  className={clsx(
                    // general styles for textarea
                    "outline-none text-sm rounded-lg block w-full p-2.5 border",

                    // background color
                    "bg-gray-100 dark:bg-[rgb(20,29,31)]",
                    "hover:bg-gray-200 dark:hover:bg-[rgb(25,34,36)]",

                    // border color
                    "border-gray-300 dark:border-gray-600",
                    "focus:ring-sky-400 focus:border-sky-400",
                    "dark:focus:ring-sky-500 dark:focus:border-sky-500",

                    // text color
                    "text-gray-900 dark:text-white",
                    "dark:placeholder-gray-400 "
                  )}
                  {...register("message", { required: true })}
                />
                {errors.message && (
                  <p className="italic text-sm text-red-500 dark:text-red-400 mt-2">
                    &quot;Hello, World!&quot;, maybe?
                  </p>
                )}
              </div>
            </div>

            <p className="italic text-sm text-slate-500 dark:text-slate-600 mt-4">
              *Form is handled by Gatsby Function and NodeMailler. No credential
              is required from your end.
            </p>

            <button
              type="submit"
              className={clsx(
                // Fluid button
                "relative w-full",
                "flex items-center justify-center rounded-[3rem]",

                // Gutter
                "px-2 py-2 mt-8 gap-4",

                // style
                "bg-sky-500 dark:bg-sky-400",
                "text-white"
              )}
            >
              <div className="h-6">
                {loading ? (
                  <div className="flex items-center h-6 gap-3">
                    {/* Three dots loading. Use delay to create a pulse */}
                    <div className="animate-loading animation-delay-300 block w-3 h-3 rounded-full bg-slate-50" />
                    <div className="animate-loading animation-delay-200 block w-3 h-3 rounded-full bg-slate-50" />
                    <div className="animate-loading animation-delay-100 block w-3 h-3 rounded-full bg-slate-50" />
                  </div>
                ) : (
                  "Send"
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

const Label: React.FC<
  PropsWithChildren<LabelHTMLAttributes<HTMLLabelElement>>
> = ({ className: _className, children, htmlFor, ...rest }) => {
  return (
    <label {...rest} className="block mb-2 text-lg" htmlFor={htmlFor}>
      {children}
    </label>
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
      className={clsx(
        // general styles
        "outline-none text-sm rounded-lg block w-full p-2.5 border",

        // background color
        "bg-gray-100 dark:bg-[rgb(20,29,31)]",
        "hover:bg-gray-200/75 dark:hover:bg-[rgb(25,34,36)]",

        // border color
        "border-gray-300 dark:border-gray-600",
        "focus:ring-sky-400 focus:border-sky-400",
        "dark:focus:ring-sky-500 dark:focus:border-sky-500",

        // text color
        "text-gray-900 dark:text-white",
        "dark:placeholder-gray-400 "
      )}
    />
  );
});
Input.displayName = "InputRefComponent";

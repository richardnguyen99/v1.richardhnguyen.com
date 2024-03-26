import * as React from "react";
import clsx from "classnames";

import Tabs from "@components/Tab";
import { TabProps } from "@components/Tab/type";
import { InfoIcon } from "@primer/octicons-react";

const tabs: TabProps[] = [
  {
    icon: <InfoIcon size={16} />,
    value: "intro",
    displayName: "Privacy overview",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          1. Privacy Overview
        </h1>

        <h2 className="text-2xl font-bold mb-6">General information</h2>
        <p className="leading-6 mb-4">
          On this page, you will find information on what happens to your
          personal data when you&apos;re using this website. The term{" "}
          <span className="italic">&quot;personal</span>&quot; is essentially
          all data that can be used to personally identify you.
        </p>
        <p className="leading-6 mb-4">
          This privacy policy explains what data we collect, how we collect it,
          and why we collect it. It also explains how we protect your personal
          information.
        </p>

        <h2 className="text-2xl font-bold mb-6">Legal age policy</h2>
        <p className="leading-6 mb-4">
          This site is intented for users who are at least 18 years of age, be
          of legal age of majority in your jurisdiction, and have the legal
          authority to enter into this agreement.
        </p>
        <p className="leading-6 mb-4">
          If you are under the age of 18, or not of legal age according to your
          laws, you are not allowed to use this site and you are not allowed to
          provide any personal information to us. By using this site, you are
          representing that you are at least 18 years of age, be of legal age of
          majority in your jurisdiction, and have the legal authority to enter
          into this agreement.
        </p>

        <h2 className="text-2xl font-bold mb-6">About your consense</h2>
        <p className="leading-6 mb-4">
          By using or accessing this site, you are deemed to read this policy
          and you consent to the collection and use of information in accordance
          with this policy. If you withdraw your consent, please do not use this
          site and we will not be charged with any responsibility.
        </p>
        <p className="leading-6 mb-4">
          We also reserve the right to amend this Privacy Policy at any time
          without prior individual notice. The data on the top of the page shown
          on the top of this page is the last time this policy was updated. You
          are responsible for verifying whether any changes have been made.
          Therefore, you should check this Privacy Policy regularly. If you
          continue to use, access, or interact with this site, you are deemed to
          have accepted this Privacy Policy. If you do not agree to this Privacy
          Policy, please do not use this site.
        </p>
      </div>
    ),
  },
  {
    value: "what",
    displayName: "What we collect",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          2. What Personal Data Do we Collect?
        </h1>

        <h2 className="text-2xl font-bold mb-6">Communication information</h2>
        <p className="leading-6 mb-4">
          We may collect the information you provide when you wish to
          communicate with us via feedback, emails or any forms of digital
          interaction with us.
        </p>

        <h2 className="text-2xl font-bold mb-6">Device information</h2>
        <p className="leading-6 mb-4">
          We may collect the information about your device when you are visiting
          this site. This information may include your IP address, browser type,
          operating system, access time, referring website addresses for the
          purpose of anayltics and security.
        </p>

        <h2 className="text-2xl font-bold mb-6">Analytical information</h2>
        <p className="leading-6 mb-4">
          We may collect the information about your visiting behavior on this
          site using Google Analytics. This information may include your
          location, visiting times, visited pages, and other information that
          Google Analytics collects and uses to aggredate insights.
        </p>

        <h2 className="text-2xl font-bold mb-6">Preference information</h2>
        <p className="leading-6 mb-4">
          We may collect the information about your preferences that are stored
          in your local storages and cookies when you wish to customize your
          experience on this site. This information can be removed by clearing
          your browser data on your end.
        </p>
      </div>
    ),
  },
  {
    value: "why",
    displayName: "Why we collect it",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          3. Why Do We Collect Your Data?
        </h1>

        <ol className="list-decimal ml-5 mb-6 [&_li]:pl-4 [&_li]:pb-6">
          <li>For feedback, reaching out and questions.</li>
          <li>For monitoring, security analysis, and prevent errors</li>
          <li>
            For analytical purposes such as trend insights, favorite pages and
            reading times.
          </li>
          <li>For personal customization and better user experience.</li>
        </ol>
      </div>
    ),
  },
  {
    value: "who",
    displayName: "Who uses it?",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          4. Who Uses Your Data?
        </h1>

        <p className="leading-6 mb-4">
          In order to achieve the purposes set out in this Privacy Policy, we
          may share your personal data with the following categories of
          recipients:
        </p>

        <ol className="list-decimal ml-5 mb-6 [&_li]:pl-4 [&_li]:pb-6">
          <li>For developers and maintainers of this site</li>
          <li>
            For third-party service providers that uses personal information on
            our behalf
          </li>
          <li>
            For government agencies, law enforcements or regulatory authorities
            when required by law
          </li>
        </ol>

        <p className="leading-6 mb-4">
          We, developers and maintainers of this site, will not sell, rent,
          exchange or distribute your personal information for monetization,
          advertisment, goods, merchandise, or any other financial purposes.
        </p>
      </div>
    ),
  },
  {
    value: "how",
    displayName: "How we store it",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          5. How Do We Store Your Personal Data?
        </h1>

        <h2 className="text-2xl font-bold mb-6">Storage</h2>
        <p className="leading-6 mb-4">
          We may store your personal data that has been described in previous
          sections in our servers, databases and third-party services, all of
          which are stored in the United States.
        </p>
        <p className="leading-6 mb-4">
          It is our obligation to provide and disclose the information to the
          government agencies, law enforcements or regulatory authorities in
          response to a valid legal request.
        </p>
        <p className="leading-6 mb-4">
          We require all third parties to respect the security of your personal
          data and to treat it in accordance with the law. We do not allow our
          third-party service providers to use your personal data for their own
          purposes and only permit them to process your personal data for
          specified purposes and in accordance with our instructions.
        </p>

        <h2 className="text-2xl font-bold mb-6">Duration</h2>
        <p className="leading-6 mb-4">
          We will only retain your personal data for as long as necessary to
          fulfill the purposes we collected it for, including for the purposes
          of satisfying any legal, accounting, or reporting requirements.
        </p>
        <p className="leading-6 mb-4">
          To determine the appropriate retention period for personal data, we
          consider the amount, nature, and sensitivity of the personal data, the
          potential risk of harm from unauthorized use or disclosure of your
          personal data, the purposes for which we process your personal data
          and whether we can achieve those purposes through other means, and the
          applicable legal requirements.
        </p>
      </div>
    ),
  },
  {
    value: "contact",
    displayName: "Contact",
    children: (
      <div className="lg:text-lg">
        <h1 className="text-3xl mb-8 font-black text-amber-500 dark:text-amber-400">
          6. Contact Us
        </h1>

        <p className="leading-6 mb-4">
          For any questions or concerns about this Privacy Policy, please
          contact us at:
        </p>
        <p className="leading-6 mb-4 ">
          <a
            href="mailto:richard@richardhnguyen.com"
            className="hover:border-b-2 dark:hover:text-sky-400 dark:hover:border-sky-400 hover:text-sky-500 dark:border-sky-500"
          >
            richard@richardhnguyen.com
          </a>
        </p>
      </div>
    ),
  },
];

const Privacy: React.FC = () => {
  return (
    <div
      className={clsx("py-12 px-6", {
        "md:max-w-3xl md:py-16 md:px-10 md:mx-auto": true,
        "lg:max-w-4xl lg:py-20": true,
        "xl:max-w-6xl xl:py-24": true,
      })}
    >
      <div className={clsx("flex flex-col items-center gap-4")}>
        <h1
          className={clsx(
            "text-4xl sm:text-5xl md:text-6xl lg:text-7xl",
            "font-semibold sm:font-bold md:font-extrabold lg:font-black"
          )}
        >
          Privacy Policy
        </h1>
        <h5 className={clsx("text-base sm:text-lg md:text-xl lg:text-2xl")}>
          Last updated: <span className="italic">March 26, 2024</span>
        </h5>
        <div className="w-full lg:max-w-4xl mt-8">
          <Tabs defaultValue={tabs[0].value} tabs={tabs} />
        </div>
      </div>
    </div>
  );
};

export default Privacy;

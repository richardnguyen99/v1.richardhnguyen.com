/**
 * This website uses this configuration to format display according to the
 * current language.
 *
 * @author Richard Nguyen <richard@richardhnguyen.com>
 */

const config = {
  en: {
    default: true,
    path: "en",
    locale: "en-US",
    dateFormat: "MM/DD/YYYY",
    siteLanguage: "en",
    ogLanguage: "en_US",
    defaultTitle: "Latest from Richard",
    defaultDescription: "Personal blog about tech by Richard H. Nguyen",
  },
  vi: {
    path: "vi",
    locale: "vi-VN",
    dateFormat: "DD.MM.YYYY",
    siteLanguage: "vi",
    ogLanguage: "vi_VN",
    defaultTitle: "Tin mới nhất từ Richard",
    defaultDescription: "Trang blog cá nhân về công nghệ của Richard H. Nguyen",
  },
};

export default config;

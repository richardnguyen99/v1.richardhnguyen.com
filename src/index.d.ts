declare module "*.svg" {
  const content: unknown;
  export default content;
}

declare namespace NodeJS {
  interface ProcessEnv {
    GITHUB_TOKEN: string;
    GETFORM_ENDPOINT: string;
    SMTP_HOST: string;
    SMTP_PORT: string;
    SMTP_EMAIL: string;
    SMTP_PASSWORD: string;
  }
}

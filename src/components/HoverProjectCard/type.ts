export enum ProjectStatus {
  DONE = 1 << 1,
  IN_PROGRESS = 1 << 2,
  ON_HOLD = 1 << 3,
}

export type HoverProjectCardProps = {
  defaultImageSrc: string;
  hoverImageSrc: string;

  orderImageSrc: string;

  stacks: string[];
  title: string;
  status: ProjectStatus;

  externalLink?: string;
  linkText?: string;
};

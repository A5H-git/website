export type Project = {
  id: number;
  title: string;
  slug: string;
  summary: string;
  bodyText: string;
  bodyUrl?: string;
  previewImage?: string;
  tags?: string[];
};
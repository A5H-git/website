export type Project = {
  id: number;
  title: string;
  slug: string;
  body: string;
  summary: string;
  previewImage?: string;
  tags?: string[];
};
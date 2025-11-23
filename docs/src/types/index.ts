export interface DateFormats {
  display: string;
  iso: string;
}

export interface Heading {
  id: string;
  text: string;
  level: number;
}

export interface Recipe {
  description: string;
  lastModified: DateFormats;
  link: string;
  title: string;
}

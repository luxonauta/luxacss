export interface DateFormats {
  display: string;
  iso: string;
}

export interface Recipe {
  description: string;
  lastModified: DateFormats;
  link: string;
  title: string;
}

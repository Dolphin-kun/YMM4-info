export type Routes = Route[];

export type Route = {
  label: string;
  path?: string;
  pages?: Page[];
  subPages?: Page[];
};

type Page = {
  label: string;
  path: string;
};

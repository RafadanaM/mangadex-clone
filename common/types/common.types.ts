export type SidebarItemContentType = "main" | "sub";

export type Language = "EN" | "IT" | "BR" | "ID";

export type IconButtonType = "default" | "menu";

export type ButtonTheme = "primary" | "secondary" | "light" | "transparent";

export type ButtonCollapseBreakPoint = "md" | "lg" | "xl" | "2xl";

// credits goes to https://twitter.com/WrocTypeScript/status/1306296710407352321
export type TupleUnion<U extends string, R extends any[] = []> = {
  [S in U]: Exclude<U, S> extends never
    ? [...R, S]
    : TupleUnion<Exclude<U, S>, [...R, S]>;
}[U];

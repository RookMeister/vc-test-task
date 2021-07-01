export interface ILinks{
  name: String;
  url?: String;
}

export interface IMenu {
  title: String;
  links: ILinks[];
}
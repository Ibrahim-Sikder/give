import { ReactNode } from "react";


export type TData = {
  _id: string;
  title: string;
  amount: number;
  categories: string;
  description: string;
  image: string;
};
export type TContainer = {
  children: ReactNode;
  className: string;
};

export type TCommunity = {
  _id:string,
  comment:string
}
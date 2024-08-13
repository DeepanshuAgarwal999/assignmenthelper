import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export function convertTimestampToDate(timestamp: number): string {
  const date = new Date(timestamp * 1000); 
  return date.toDateString();
}

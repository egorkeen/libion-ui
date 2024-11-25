import { isRecord } from "utils/helpers";

export const toRecord = (value: unknown) => (isRecord(value) ? value : {});

export const toArray = <T>(value: T | T[]): T[] =>
  Array.isArray(value) ? value : [];

export * from "./toGenres";
